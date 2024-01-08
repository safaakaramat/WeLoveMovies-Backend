const db = require("../db/connection");

// Retrieve a list of all movies
function list() {
  return db("movies");
}

// Retrieve a list of movies currently showing in theaters
function listShowing() {
  return db("movies as m")
    .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
    .where({ "mt.is_showing": true });
}

// Retrieve details of a specific movie by its ID
function read(movieId) {
  return db("movies").where({ movie_id: movieId });
}

// Retrieve details of a specific critic by their ID
function getCritics(criticId) {
  return db("critics").where({ critic_id: criticId });
}

// Retrieve reviews for a specific movie by its ID
function listReviews(movieId) {
  return db("movies as m")
    .join("reviews as r", "m.movie_id", "r.movie_id")
    .where({ "m.movie_id": movieId });
}

// Retrieve theaters associated with a specific movie by its ID
function listTheaters(movieId) {
  return db("movies as m")
    .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
    .join("theaters as t", "t.theater_id", "mt.theater_id")
    .select("t.*", "m.movie_id")
    .where({ "m.movie_id": movieId });
}

// Export functions for use in other parts of the application
module.exports = {
  list,
  listShowing,
  read,
  getCritics,
  listReviews,
  listTheaters,
};
