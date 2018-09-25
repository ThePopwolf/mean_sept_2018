const path = require('path'),
      Movie = require('../models/movies.js');
      Review = require('../models/reviews.js');

module.exports = {
  index: function(req, res) {
    Movie.find({}).sort("-createdAt").populate('reviews').exec(function(err, movies) {
      if (err) {
        console.log("Error:", err);
        return res.json({ error: err });
      }
      console.log("Found all movies");
      return res.json({ movies: movies });
    });
  },

  show: function(req, res) {
    Movie.findById(req.params.id).populate('reviews').exec(function(err, movie) {
      if (err) {
        console.log("Error:", err);
        return res.json({ error: err });
      }
      console.log("Found one movie");
      return res.json({ movie: movie });
    });
  },

  create: function(req, res) {
    var movie = new Movie({
      title: req.body.title
    });
    var review = new Review({
      name: req.body.name,
      stars: req.body.stars,
      comment: req.body.comment
    });
    movie.reviews.push(review);
    review.validate(function(err) {
      if (err) {
        console.log("Error:", err);
        var flash = [];
        for(var key in err.errors) {
          flash.push(err.errors[key].message);
        }
        return res.json({ errors: flash });
      }
      movie.validate(function(err) {
        if (err) {
          console.log("Error:", err);
          var flash = [];
          for(var key in err.errors) {
            flash.push(err.errors[key].message);
          }
          return res.json({ errors: flash });
        }
        console.log("Created a movie");
        review.save();
        movie.save();
        return res.json({ movie: movie });
      });
    });
  },

  update: function(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
      if (err) { return res.json({ error: err }) }
      var review = new Review({
        name: req.body.name,
        stars: req.body.stars,
        comment: req.body.comment
      });
      movie.reviews.push(review);
      review.save(function(err) {
        if (err) {
          console.log("Error:", err);
          var flash = [];
          for(var key in err.errors) {
            flash.push(err.errors[key].message);
          }
          return res.json({ errors: flash });
        }
        movie.save(function(err) {
          if (err) {
            console.log("Error:", err);
            return res.json({ error: err });
          }
          return res.json({ review: review });
        });
      });
    });
  },

  destroy: function(req, res) {
    Movie.remove({ _id: req.params.id }, function(err) {
      if (err) {
        console.log("Error:", err);
        return res.json({ error: err });
      }
      console.log("Deleted movie");
      return res.json({ message: "Success" });
    });
  },

  all: function(req, res, next) {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  }
}
