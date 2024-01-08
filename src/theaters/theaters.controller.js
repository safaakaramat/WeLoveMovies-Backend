// Importing the asyncErrorBoundary utility to handle asynchronous errors
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
// Importing the theaters service
const service = require("./theaters.service");

// Controller function to list theaters with their respective movies
async function list(req, res) {
  // Retrieve a list of theaters from the service
  const theaters = await service.list();
  const theatersAndMovies = [];

  // Iterate through each theater to fetch its associated movies
  for (let i = 0; i < theaters.length; i++) {
    const theater = theaters[i];
    const { theater_id } = theater;

    // Retrieve movies for the current theater from the service
    const movies = await service.getMovies(theater_id);

    // Create an object combining theater details and associated movies
    const TM = { ...theater, movies: movies };
    theatersAndMovies.push(TM);
  }

  // Respond with a JSON containing theaters and their associated movies
  res.status(200).json({ data: theatersAndMovies });
}

// Exporting the 'list' function with asyncErrorBoundary as middleware
module.exports = {
  list: [asyncErrorBoundary(list)],
};
