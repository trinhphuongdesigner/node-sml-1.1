const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    '<div><h1><a href="/category">Go to Category page</a></h1> <h1><a href="/contact">Go to Contact page</a></h1></div>'
  );
});

app.get("/category", (req, res) => {
  res.send(
    '<div><h1><a href="/contact">Back to Contact page</a></h1> <h1><a href="/">Back to Home page</a></h1></div>'
  );
});

app.get("/contact", (req, res) => {
  res.send(
    '<div><h1><a href="/category">Back to Category page</a></h1> <h1><a href="/">Back to Home page</a></h1></div>'
  );
});

app.get("/category/:slug", (req, res) => {
  let title = req.params.slug;
  while (title.indexOf("-") !== -1) {
    title = title.replace("-", " ");
  }
  res.send(
    `<div><h1>Welcome to post ${title}</h1><h1><a href="/category">Back to Category page</a></h1> <h1><a href="/">Back to Home page</a></h1></div>`
  );
});

app.listen(3000, () => {
  "Listen in port";
});
