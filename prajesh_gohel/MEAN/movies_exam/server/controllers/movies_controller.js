const path = require('path'),
      mongoose = require('mongoose'),
      Movie = require('../models/movies.js'),
      Rating = require('../models/ratings.js');

module.exports = {
  index: function(req, res) {
    Movie.find({}).sort("-createdAt").populate('ratings').exec(function(err, movies) {
      if (err) {
        console.log("Error:", err);
        return res.json({ error: err });
      }
      else {
        console.log("Found all movies");
        return res.json({ movies: movies });
      }
    });
  },

  show: function(req, res) {
    Movie.findById(req.params.id).populate('ratings').exec(function(err, movie) {
      if (err) {
        console.log("Error:", err);
        return res.json({ error: err });
      }
      console.log("Found one movie");
      return res.json({ movie: movie });
    })
  },

  create: function(req, res) {
    var movie = new Movie({ title: req.body.title });
    var rating = new Rating({
      name: req.body.name,
      stars: req.body.stars,
      review: req.body.review
    });
    rating.save(function(err) {
      if (err) {
        console.log("Error:", err);
        return res.json({ error: err })
      }
      movie.ratings.push(rating);
      movie.save(function(err) {
        if (err) {
          console.log("Error:", err);
          return res.json({ error: err });
        }
        return res.json({ movie: movie });
      });
    });
  },

  update: function(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
      var rating = new Rating({
        name: req.body.name,
        stars: req.body.stars,
        review: req.body.review
      });
      movie.ratings.push(rating);
      rating.save(function(err) {
        if (err) {
          console.log("Error:", err);
          return res.json({ error: err });
        }
        else {
          movie.save(function(err) {
            if (err) {
              console.log("Error:", err);
              return res.json({ error: err });
            }
            console.log("Nice job");
            return res.json({ rating: rating });
          });
        }
      });
    });
  },

  destroy: function(req, res) {
    Movie.remove({ _id: req.params.id }, function(err) {
      if (err) {
        console.log("Error:", err);
        return res.json({ error: err });
      }
      console.log("destroying movie...");
      return res.json({ message: "Destroyed" });
    });
  },

  all: function(req, res, next) {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  }
}
