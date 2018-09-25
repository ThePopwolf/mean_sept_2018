const mongoose = require('mongoose'),
      validator = require('mongoose-validator');

var RatingsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [3, 'Name must be three or more characters']
  },
  stars: {
    type: Number,
    required: [true, 'You must rate the movie in stars'],
    min: [1, 'Rating must be at least one star'],
    max: [5, 'Rating can be no higher than 5 stars']
  },
  review: {
    type: String,
    required: [true, 'Please submit a review'],
    minlength: [3, 'Review must be three or more characters']
  }
}, { timestamps: true });

const Rating = mongoose.model('Rating', RatingsSchema);
module.exports = Rating;
