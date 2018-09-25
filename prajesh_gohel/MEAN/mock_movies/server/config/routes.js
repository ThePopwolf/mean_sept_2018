const movies = require('../controllers/movies_controller.js'),
      mongoose = require('mongoose'),
      Movie = mongoose.model('Movie'),
      Review = mongoose.model('Review');

module.exports = function(app) {
  app.get('/api/movies', movies.index);
  app.get('/api/movies/:id', movies.show);
  app.post('/api/movies', movies.create);
  app.put('/api/movies/:id/review', movies.update);
  app.delete('/api/movies/:id', movies.destroy);
  app.all('*', movies.all);
}
