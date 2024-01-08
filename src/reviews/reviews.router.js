const router = require("express").Router();
const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// Routes for handling specific review by reviewId
router
  .route("/:reviewId")
  .get(controller.read) // GET request to read a specific review
  .put(controller.put) // PUT request to update a specific review
  .delete(controller.delete) // DELETE request to delete a specific review
  .all(methodNotAllowed); // Handle other HTTP methods with 'Method Not Allowed' error

// Default route that responds with 'Method Not Allowed' for any endpoint not specified above
router.route("/").all(methodNotAllowed);

module.exports = router;
