const express = require('express');
const db = require('../models/database');
const { verify } = require('../middleware/auth');
const router = express.Router();

router.get('/', verify, (req, res) => {
  db.get('SELECT premium FROM users WHERE id = ?', [req.user.id], (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'database error' });
    }

    db.all('SELECT * FROM products ORDER BY created_at DESC', [], (err, products) => {
      if (err) {
        return res.status(500).json({ error: 'database error' });
      }

      res.json(products);
    });
  });
});

router.get('/:id', verify, (req, res) => {
  db.get('SELECT premium FROM users WHERE id = ?', [req.user.id], (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'database error' });
    }

    db.get('SELECT * FROM products WHERE id = ?', [req.params.id], (err, product) => {
      if (err || !product) {
        return res.status(404).json({ error: 'product not found' });
      }

      if (product.premium_only && !user.premium) {
        return res.status(403).json({ error: 'premium required', redirect: process.env.REKONISE_LINK });
      }

      res.json(product);
    });
  });
});

module.exports = router;
