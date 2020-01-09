const express = require("express");
const app = express();
const port = 8080;
const fetch = require("node-fetch");
var cors = require("cors");

app.get("/vehicle-movement", cors(), (req, res, next) =>
  fetchAndSend(
    "https://labs.thetrainbrain.com/realtimemap/public/positions.json",
    res
  )
);

app.get("/knock-on", cors(), (req, res, next) =>
  fetchAndSend("https://labs.thetrainbrain.com/knockon/?minutes=30", res)
);

app.get("/storning", cors(), (req, res, next) =>
  fetchAndSend(
    "https://api.sl.se/api2/deviations.json?key=f5317e51b33d42bba32545f94341eeab",
    res
  )
);

app.get("/trafiklaget", cors(), (req, res, next) =>
  fetchAndSend(
    "https://api.sl.se/api2/trafficsituation.json?key=e1eb7adfb390439ca87898b5b805ae5a",
    res
  )
);

function fetchAndSend(api, res) {
  fetch(api)
    .then(res => {
      return res.json();
    })
    .then(json => {
      res.send(json);
    });
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
