* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(180deg, #0a0e27 0%, #0f1419 100%);
  color: #ffffff;
  line-height: 1.6;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.navbar {
  background: rgba(10, 14, 39, 0.8);
  backdrop-filter: blur(10px);
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
}

.logo a {
  text-decoration: none;
  color: #ffffff;
}

.nav-links {
  display: flex;
  gap: 15px;
  align-items: center;
}

.btn-login, .btn-products, .btn-primary, .btn-secondary {
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.btn-primary {
  background: #4169E1;
  color: white;
}

.btn-primary:hover {
  background: #5179F1;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(65, 105, 225, 0.4);
}

.btn-secondary {
  background: transparent;
  color: #4169E1;
  border: 2px solid #4169E1;
}

.btn-secondary:hover {
  background: #4169E1;
  color: white;
}

.btn-login, .btn-products {
  background: #4169E1;
  color: white;
  border: none;
  display: inline-block;
}

.btn-login:hover, .btn-products:hover {
  background: #5179F1;
  transform: translateY(-2px);
}

.hero {
  padding: 100px 0;
  text-align: center;
}

.hero .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  max-width: 1200px;
}

.hero-content {
  flex: 1;
  text-align: left;
}

.terminal-widget {
  flex: 1;
  max-width: 500px;
  background: rgba(15, 20, 35, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.terminal-header {
  background: rgba(20, 25, 45, 0.9);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.terminal-buttons {
  display: flex;
  gap: 8px;
}

.terminal-btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-btn.red {
  background: #ff5f56;
}

.terminal-btn.yellow {
  background: #ffbd2e;
}

.terminal-btn.green {
  background: #27c93f;
}

.terminal-title {
  color: #b8c5d6;
  font-size: 13px;
  font-weight: 500;
}

.terminal-body {
  padding: 20px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  min-height: 120px;
}

.terminal-line {
  color: #10b981;
  margin-bottom: 8px;
}

.terminal-output {
  color: #b8c5d6;
}

.trust-indicator {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.stars {
  font-size: 20px;
  letter-spacing: 2px;
}

.trust-text {
  color: #b8c5d6;
  font-size: 14px;
}

.hero h1 {
  font-size: 56px;
  margin-bottom: 20px;
  color: #ffffff;
  font-weight: 700;
  line-height: 1.2;
}

.hero-subtitle {
  color: #4169E1;
  display: block;
}

.hero p {
  font-size: 18px;
  color: #b8c5d6;
  margin-bottom: 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.features {
  padding: 80px 0;
  background: rgba(15, 20, 35, 0.5);
}

.features h2 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 15px;
  font-weight: 700;
}

.section-subtitle {
  text-align: center;
  color: #b8c5d6;
  margin-bottom: 50px;
  font-size: 16px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  background: rgba(20, 25, 45, 0.6);
  padding: 30px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: #4169E1;
  box-shadow: 0 10px 30px rgba(65, 105, 225, 0.2);
}

.feature-card h3 {
  color: #4169E1;
  margin-bottom: 15px;
}

.auth-section {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}

.auth-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.auth-box {
  background: rgba(20, 25, 45, 0.8);
  padding: 40px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.auth-box h2 {
  margin-bottom: 30px;
  text-align: center;
}

.auth-box form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.auth-box input {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(15, 20, 35, 0.8);
  color: white;
  font-size: 14px;
}

.auth-box input:focus {
  outline: none;
  border-color: #4169E1;
  box-shadow: 0 0 0 3px rgba(65, 105, 225, 0.1);
}

.auth-switch {
  text-align: center;
  margin-top: 20px;
  color: #aaa;
}

.auth-switch a {
  color: #4169E1;
  text-decoration: none;
}

.products-section {
  padding: 60px 0;
  min-height: calc(100vh - 80px);
}

.products-section h1 {
  text-align: center;
  margin-bottom: 15px;
  font-size: 42px;
  font-weight: 700;
}

.premium-banner {
  background: #4169E1;
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 600;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.product-card {
  background: rgba(20, 25, 45, 0.6);
  padding: 30px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-5px);
  border-color: #4169E1;
  box-shadow: 0 10px 30px rgba(65, 105, 225, 0.2);
}

.product-card h3 {
  color: #ffffff;
  margin-bottom: 15px;
  font-weight: 600;
}

.product-card p {
  color: #b8c5d6;
  margin-bottom: 20px;
}

.product-badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-free {
  background: #10b981;
  color: white;
}

.badge-premium {
  background: #4169E1;
  color: white;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
}

.modal-content {
  background: rgba(20, 25, 45, 0.95);
  margin: 10% auto;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  position: relative;
  backdrop-filter: blur(10px);
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  line-height: 20px;
}

.close:hover {
  color: #4169E1;
}

#modalActions {
  margin-top: 30px;
  display: flex;
  gap: 15px;
  justify-content: center;
}

.admin-section {
  padding: 60px 0;
  min-height: calc(100vh - 80px);
}

.admin-section h1 {
  text-align: center;
  margin-bottom: 40px;
}

.admin-box {
  background: rgba(20, 25, 45, 0.8);
  padding: 30px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
}

.admin-box h2 {
  margin-bottom: 20px;
  color: #4169E1;
}

.admin-box form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.admin-box input, .admin-box textarea {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(15, 20, 35, 0.8);
  color: white;
  font-size: 14px;
  font-family: inherit;
}

.admin-box input:focus, .admin-box textarea:focus {
  outline: none;
  border-color: #4169E1;
  box-shadow: 0 0 0 3px rgba(65, 105, 225, 0.1);
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #aaa;
}

.checkbox-label input[type="checkbox"] {
  width: auto;
}

.product-item {
  background: rgba(20, 25, 45, 0.6);
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.product-info h3 {
  color: #ffffff;
  margin-bottom: 5px;
  font-weight: 600;
}

.product-info p {
  color: #b8c5d6;
  font-size: 14px;
}

.btn-delete {
  background: #ef4444;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.btn-delete:hover {
  background: #dc2626;
}

footer {
  background: rgba(10, 14, 39, 0.8);
  padding: 30px 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #b8c5d6;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 32px;
  }

  .hero .container {
    flex-direction: column;
    text-align: center;
  }

  .hero-content {
    text-align: center;
  }

  .trust-indicator {
    align-items: center;
  }

  .terminal-widget {
    max-width: 100%;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }
}
