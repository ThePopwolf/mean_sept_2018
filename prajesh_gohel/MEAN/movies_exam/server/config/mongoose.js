const mongoose = require('mongoose'),
      path = require('path'),
      validator = require('mongoose-validator'),
      fs = require('fs');

mongoose.connect('mongodb://localhost/movies_exam', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
  if (file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});
