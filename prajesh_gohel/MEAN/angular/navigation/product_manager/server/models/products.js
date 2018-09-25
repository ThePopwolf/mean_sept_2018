const mongoose = require('mongoose'),
      validator = require('mongoose-validator');

var ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  imageURL: {
    type: String
  }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
