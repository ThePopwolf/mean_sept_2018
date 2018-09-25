const mongoose = require('mongoose'),
      validate = require('mongoose-validator'),
      Schema = mongoose.Schema;

var ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [3, 'Name must be at least 3 characters']
  },
  stars: {
    type: Number,
    required: [true, 'You must input a rating'],
    min: [1, 'Rating is too low, please try again'],
    max: [5, 'Rating is too high, please try again']
  },
  comment: {
    type: String,
    required: [true, 'You must write a review'],
    minlength: [3, 'Review must be at least 3 characters']
  }
}, { timestamps: true });

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
