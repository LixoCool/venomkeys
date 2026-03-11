<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Panel | BloxKeys Clone</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <nav class="navbar">
    <div class="container">
      <div class="logo"><a href="/">BloxKeys</a></div>
      <div class="nav-links">
        <a href="/products" class="btn-secondary">Products</a>
        <button id="logoutBtn" class="btn-secondary">Logout</button>
      </div>
    </div>
  </nav>

  <section class="admin-section">
    <div class="container">
      <h1>Admin Panel</h1>

      <div class="admin-box">
        <h2>Add New Product</h2>
        <form id="addProductForm" enctype="multipart/form-data">
          <input type="text" id="productName" placeholder="Product Name" required>
          <textarea id="productDescription" placeholder="Product Description" rows="4"></textarea>
          <input type="file" id="productFile">
          <label class="checkbox-label">
            <input type="checkbox" id="premiumOnly">
            Premium Only
          </label>
          <button type="submit" class="btn-primary">Add Product</button>
        </form>
      </div>

      <div class="admin-box">
        <h2>Manage Products</h2>
        <div id="productsList"></div>
      </div>
    </div>
  </section>

  <script src="/js/admin.js"></script>
</body>
</html>
