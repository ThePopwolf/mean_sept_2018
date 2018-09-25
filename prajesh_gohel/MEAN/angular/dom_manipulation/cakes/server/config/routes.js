const mongoose = require('mongoose'),
      Cake = mongoose.model('Cake'),
      cakes = require('../controllers/cakes_controller.js');

module.exports = function(app) {
  app.get('/cakes', cakes.all);
  app.post('/cakes', cakes.create);
  app.put('/cakes/rating/:id', cakes.update);
  app.get('/cakes/:id', cakes.show);
}
