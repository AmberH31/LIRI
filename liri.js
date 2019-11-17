// ----------------variables---------------
require("dotenv").config();

const fs = require("fs");
const key = require("./keys");

// Requiring Spotify function exported from spotify.js
const mySpotify = require("./spotify");
// Requiring Concert function exported from concert.js
const myConcert = require("./concert");
// Requiring Movie function exported from movie.js
const myConcert = require("./movie");

//Requiring data from node-spotify-api. Moved this to sptofiy.js
// const Spotify = require("node-spotify-api");
const moment = require("moment");
const axios = require("axios");
const spotify = new Spotify(key.spotify);
const parms = process.argv.splice(3).join(" ");

// ----------------application runing---------------

App(process.argv[2], parms);

// ----------------function definition---------------

function App(command, parameters) {}

// ----------------function---------------
