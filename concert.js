const fs = require("fs");
const axios = require("axios");
const moment = require("moment"); //抓到時間資料

function myConcert(userInput) {
  //https://rest.bandsintown.com/artists/incubus/events?app_id=codingbootcamp
  var URL =
    "https://rest.bandsintown.com/artists/" +
    artist +
    "/events?app_id=" +
    keys.bandsInTown.id;

  axios.get(URL).then(function(response) {
    //   console.log("response data")
    for (var i = 0; i < response.data.length; i++) {
      console.log(
        "Concert Time: " +
          moment(response.data[i].datetime, "YYYY-MM-DDTHH:mm:ss").format(
            "MM/DD/YYYY, h:mm A"
          )
      );
      console.log(
        "Concert Location: " +
          response.data[i].venue.city +
          ", " +
          response.data[i].venue.region +
          ", " +
          response.data[i].venue.country
      );
      console.log("Concert Venue: " + response.data[i].venue.name);
      console.log("--------------------------------------------------");
      fs.appendFileSync(
        "log.txt",
        "\r\n" + "Concert Search Log----------------------" + "\r\n",
        "utf8"
      );
      fs.appendFileSync(
        "log.txt",
        "\r\n" + "Venue Name: " + response.data[i].venue.name + "\r\n",
        "utf8"
      );
      fs.appendFileSync(
        "log.txt",
        "\r\n" +
          "Venue Location: " +
          response.data[i].venue.city +
          ", " +
          response.data[i].venue.region +
          ", " +
          response.data[i].venue.country +
          "\r\n",
        "utf8"
      );
      fs.appendFileSync(
        "log.txt",
        "\r\n" +
          "Venue Time: " +
          moment(response.data[i].datetime, "YYYY-MM-DDTHH:mm:ss").format(
            "MM/DD/YYYY, h:mm A"
          ) +
          "\r\n",
        "utf8"
      );
      fs.appendFileSync(
        "log.txt",
        "\r\n" + "-----------------------------------------" + "\r\n",
        "utf8"
      );
    }
  });
}

module.exports = myConcert;
