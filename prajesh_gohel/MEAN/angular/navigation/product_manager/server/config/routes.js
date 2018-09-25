const products = require('../controllers/products_controller.js'),
      mongoose = require('mongoose'),
      Product = mongoose.model('Product');

module.exports = function(app) {
  app.get('/api/products', products.index);
  app.post('/api/products/new', products.create);
  app.all('*', products.all);
}
