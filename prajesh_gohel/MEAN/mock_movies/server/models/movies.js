const mongoose = require('mongoose'),
      validate = require('mongoose-validator'),
      Schema = mongoose.Schema;

require('./reviews.js');
var MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [3, 'Title must be at least 3 characters']
  },
  reviews: [{ type: Schema.ObjectId, ref: 'Review', required: [true, 'A review is required'] }]
}, { timestamps: true });

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
