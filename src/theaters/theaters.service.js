const db = require("../db/connection");

// Retrieve a list of all theaters
function list() {
  return db("theaters");
}

// Retrieve movies currently showing at a specific theater by its ID
function getMovies(theaterId) {
  return db("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id")
    .select("m.*", "mt.is_showing")
    .where({ "t.theater_id": theaterId });
}

// Export functions for use in other parts of the application
module.exports = {
  list,
  getMovies,
};
