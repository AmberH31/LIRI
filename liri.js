// ----------------variables---------------
require("dotenv").config();

const fs = require("fs");

// Requiring Spotify function exported from spotify.js
// const mySpotify = require("./spotify.js");
// Requiring Concert function exported from concert.js
const myConcert = require("concert.js");
// Requiring Movie function exported from movie.js
// const myMovies = require("./movie.js");

// ----------------application runing---------------

const typeCommand = process.argv[2];
var userInput = process.argv.splice(3, process.argv.length).join(" ");

// ----------------function definition---------------

switch (typeCommand) {
  // help

  //concert-this
  case "concert-this":
    myConcert(userInput);
    break;

  //spotify-this-song

  //movie - this;
}

// ----------------function---------------
