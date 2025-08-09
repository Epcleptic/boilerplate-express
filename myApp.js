require("dotenv").config();

let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function (req, res) {
  const USE_UPPERCASE = process.env.MESSAGE_STYLE == "uppercase";
  res.json({
    message: USE_UPPERCASE ? "HELLO JSON" : "Hello json",
  });
});

module.exports = app;
