// ----------------variables---------------
require("dotenv").config();

const fs = require("fs");

// Requiring Spotify function exported from spotify.js
const searchSpotify = require("./spotify.js");
// Requiring Concert function exported from concert.js
const myConcert = require("./concert.js");
// Requiring Movie function exported from movie.js
// const myMovies = require("./movie.js");

// ----------------application runing---------------

const typeCommand = process.argv[2];
const userInput = process.argv.splice(3, process.argv.length).join(" ");

// ----------------function definition---------------

switch (typeCommand) {
  // help
  case "help":
    console.log("Please type the command!");
  //concert-this
  case "concert-this":
    myConcert(userInput);
    break;
  //spotify-this-song
  case "spotify-this":
    searchSpotify(userInput);
    break;
  //movie - this;
}

// ----------------function---------------

function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    var dataArr = data.split(",");
    if (dataArr[0] === "concert-this") {
      var concertName = dataArr[1].slice(1, -1);
      console.log("Concert Name: " + concertName);
      myConcert(concertName);
    }
  });
}
