const path = require('path');

module.exports = {
  all: function(req, res, next) {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  }
}
