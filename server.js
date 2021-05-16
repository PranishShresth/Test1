var express = require("express");
var app = express();

app.listen(process.env.PORT || 8000);

app.get("/", function (req, res) {
  res.send("<h1>Hello G Cloud!</h1>");
});
