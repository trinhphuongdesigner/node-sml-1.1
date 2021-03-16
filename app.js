const express = require("express");
const ejs = require("ejs");
const ejsMate = require("ejs-mate");

const routes = require("./routes");

const port = 3000;

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.engine("ejs", ejsMate);
app.use("/public", express.static("./public"));

app.use(routes);

app.listen(port);
