const keys = require("./keys");
const fs = require("fs");
const axios = require("axios");

function searchMovies(userInput) {
  var URL = "http://www.omdbapi.com/?t=" + userInput + "&apikey=trilogy";

  axios
    .get(URL)
    .then(function(response) {
      // http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy
      console.log("The movie is: " + response.data.Title); //movie info goes here
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
