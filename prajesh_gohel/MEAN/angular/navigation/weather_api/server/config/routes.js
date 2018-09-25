const weather = require('../controllers/weather_controller.js');

module.exports = function(app) {
  app.all('*', weather.all);
}
