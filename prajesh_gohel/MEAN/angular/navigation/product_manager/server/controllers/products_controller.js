const path = require('path'),
      Product = require('../models/products.js');

module.exports = {
  index: function(req, res) {
    Product.find({}).sort("-createdAt").exec(function(err, products) {
      if (err) {
        console.log(`Error occured: ${err}`);
        return res.json({ error: err });
      }
      console.log("Found all products");
      return res.json({ products: products });
    })
  },

  create: function(req, res) {
    console.log("Yo fam, here's the req.body;", req.body);
    var product = new Product({
      title: req.body.title,
      price: req.body.price,
      imageURL: req.body.imageURL
    });
    product.save(function(err) {
      if (err) {
        console.log(`Error occured: ${err}`);
        return res.json({ error: err });
      }
      console.log(`Added new product: ${product.title}`);
      return res.json({ product: product });
    });
  },

  all: function(req, res, next) {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  }
}
