// ----------------variables---------------//

require("dotenv").config();
const key = require("./keys");
const Spotify = require("node-spotify-api");
const moment = require("moment");
const axios = require("axios");
const spotify = new Spotify(key.spotify);
const parms = process.argv.splice(3).join(" ");

// ----------------application runing---------------//

App(process.argv[2], parms);

// ----------------function---------------//

function App(command, parameters) {}

// ----------------function---------------//
