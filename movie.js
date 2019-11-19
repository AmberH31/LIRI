const axios = require("axios");

function searchMovies(userInput) {
  if (!userInput) {
    console.log("If you haven't watched 'Mr. Nobody,' then you should.");
    console.log("It's on Netflix!");
    userInput = "Mr. Nobody";
  }

  var URL = "http://www.omdbapi.com/?t=" + userInput + "&apikey=trilogy";
  //放在if之上的話，會印出The movie is: undefined
  axios
    .get(URL)
    .then(function(response) {
      // http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy
      console.log("--------------------------\n");
      console.log("Movie Title: " + response.data.Title); //movie info goes here
      console.log("Movie Year: " + response.data.Year);
      console.log("Movie IMDB Rating: " + response.data.imdbRating);
      console.log("Movie Rotten Tomatoes: " + response.data.Ratings[1].Value);
      console.log("Movie Country: " + response.data.Country);
      console.log("Movie Language: " + response.data.Language);
      console.log("Movie Plot: " + response.data.Plot);
      console.log("Movie Actors: " + response.data.Actors);
      console.log("\n--------------------------\n");
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
        //adds text to log.txt????
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

module.exports = searchMovies;
