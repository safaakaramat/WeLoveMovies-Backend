const db = require("../db/connection");

// Retrieve a list of all reviews
function list() {
  return db("reviews");
}

// Retrieve details of a specific review by its ID
function read(reviewId) {
  return db("reviews").where({ review_id: reviewId });
}

// Update details of a specific review by its ID
function update(updatedReview, reviewId) {
  return db("reviews")
    .select("*")
    .where({ review_id: reviewId })
    .update({ ...updatedReview, updated_at: db.fn.now() })
    .then((updatedRecords) => updatedRecords[0]);
}

// Retrieve details of a specific critic by their ID
function getCritic(criticId) {
  return db("critics").where({ critic_id: criticId }).select();
}

// Delete a specific review by its ID
function destroy(reviewId) {
  return db("reviews").where({ review_id: reviewId }).del();
}

// Export functions for use in other parts of the application
module.exports = {
  list,
  read,
  update,
  getCritic,
  destroy,
};
