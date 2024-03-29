const express = require("express");
const path = require("path");

const app = express();

const routes = require("./routes/routes");

// set up view engine as pug

app.set("views", path.join(__dirname, "views"));

app.use(express.static("./public"));

app.use("/", routes);

// remove for sample files
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(3000);

console.log("Express on 3000");

module.exports = app;
