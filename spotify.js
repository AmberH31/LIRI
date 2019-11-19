//Requiring data from node-spotify-api
const Spotify = require("node-spotify-api");
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");

function searchSpotify(userInput) {
  spotify.search({ type: "track", query: userInput }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }
    console.log(data.tracks.items[0]);
    // JSON.stringify();
    // JSON.parse();
  });
}

module.exports = searchSpotify;
