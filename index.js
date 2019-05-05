const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const Sequelize = require('sequelize');
const db = require('./db.js')

db.sequelize.sync()
    .then(() => console.log("Uspjesno povezano sa bazom!"))
    .catch((err) => console.log("Nije uspjesno povezano sa bazom!", err));



app.use("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});



app.listen(31916, () => console.log('Server na portu: 31916'));
