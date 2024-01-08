const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// Endpoint for getting theaters related to a specific movie
router
  .route("/:movieId/theaters")
  .get(controller.listTheaters) // GET request to retrieve theaters
  .all(methodNotAllowed); // Handle other HTTP methods with 'Method Not Allowed' error

// Endpoint for getting reviews related to a specific movie
router
  .route("/:movieId/reviews")
  .get(controller.listReviews) // GET request to retrieve reviews
  .all(methodNotAllowed); // Handle other HTTP methods with 'Method Not Allowed' error

// Endpoint for getting a specific movie by its ID
router
  .route("/:movieId")
  .get(controller.read) // GET request to retrieve a specific movie
  .all(methodNotAllowed); // Handle other HTTP methods with 'Method Not Allowed' error

// Endpoint for getting a list of movies
router
  .route("/")
  .get(controller.list) // GET request to retrieve a list of movies
  .all(methodNotAllowed); // Handle other HTTP methods with 'Method Not Allowed' error

module.exports = router;
