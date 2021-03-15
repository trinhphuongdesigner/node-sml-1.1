const express = require("express");
const ejs = require("ejs");
const ejsMate = require("ejs-mate");

const port = 3000;

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.engine("ejs", ejsMate);
app.use("/public", express.static("./public"));

app.get("/", (req, res) => {
  res.render("client/index");
});
app.get("/post", (req, res) => {
  res.render("client/post");
});
app.get("/contact", (req, res) => {
  res.render("client/contact");
});
app.get("/about", (req, res) => {
  res.render("client/about");
});

app.listen(port);
