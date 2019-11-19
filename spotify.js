//Requiring data from node-spotify-api
const Spotify = require("node-spotify-api");
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");

function searchSpotify(userInput) {
  //www.npmjs.com/package/node-spotify-api
  spotify.search({ type: "track", query: userInput }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }
    console.log("Artist: " + data.tracks.items[0].artists[0].name); //Try to find song info in arrays
    // JSON.stringify();
    // JSON.parse();
    console.log("The song's name: " + data.tracks.items[0].name);
    console.log(
      "A preview link of the song on Spotify: " + data.tracks.items[0].href
    );
    console.log(data.tracks.items[0].album);
  });
}

module.exports = searchSpotify;
