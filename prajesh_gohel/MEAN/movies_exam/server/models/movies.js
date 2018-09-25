const mongoose = require('mongoose'),
      validator = require('mongoose-validator')
      Schema = mongoose.Schema;

require('./ratings.js')
var MoviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [3, 'Title must be three or more characters long']
  },
  ratings: [{ type: Schema.ObjectId, ref: 'Rating' }]
}, { timestamps: true });

const Movie = mongoose.model('Movie', MoviesSchema);
module.exports = Movie;
