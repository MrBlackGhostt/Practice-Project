const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/", function (req, res) {
  // res.sendFile(__dirname+"index.html")
  // res.send("Hello");
  var today = new Date();
  var currentDay = today.getDay();
  if (currentDay === 4 || currentDay === 0) {
    res.send("weekday");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.listen(3000, () => {
  console.log("OOOOOON");
});
