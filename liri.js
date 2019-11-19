// ----------------variables---------------
require("dotenv").config();

const fs = require("fs");

// Requiring Spotify function exported from spotify.js
const searchSpotify = require("./spotify.js");
// Requiring Concert function exported from concert.js
const myConcert = require("./concert.js");
// Requiring Movie function exported from movie.js
const searchMovies = require("./movie.js");

// ----------------application runing---------------

const typeCommand = process.argv[2];
const userInput = process.argv.splice(3, process.argv.length).join(" ");

// ----------------function definition---------------

switch (typeCommand) {
  // help
  case "help":
    console.log("Please choose one of the commands!");
    console.log("concert-this");
    console.log("spotify-this-song");
    console.log("movie-this");
    console.log("do-what-it-says");

    break;
  //concert-this
  case "concert-this":
    myConcert(userInput);
    break;
  //spotify-this-song
  case "spotify-this-song":
    searchSpotify(userInput);
    break;
  //movie - this;
  case "movie-this":
    searchMovies(userInput);
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
}

// ----------------function---------------

function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    var dataArr = data.split(",");
    // console.log(dataArr);
    var argument = dataArr[1].trim().slice(1, -1); //slice去掉兩個引號, -1最後一個不被包括
    // console.log(argument);
    switch (dataArr[0]) {
      case "spotify-this-song":
        console.log("This Song: " + argument);
        myConcert(argument);
        break;
      // case "spotify-this":
      //   console.log("Spotify Song" + argument);
      //   searchSpotify(argument);
      //   break;
    }
  });
}
