//Requiring data from node-spotify-api
const Spotify = require("node-spotify-api");
const keys = require("./keys");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");

function serachSpotify(userInput) {
  spotify.search;
}
