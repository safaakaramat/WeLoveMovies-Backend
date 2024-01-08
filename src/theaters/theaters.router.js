const router = require("express").Router();
const controller = require("./theaters.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// Define a route for handling GET requests to retrieve theaters
router.route("/").get(controller.list).all(methodNotAllowed);

// Export the router for use in other parts of the application
module.exports = router;
