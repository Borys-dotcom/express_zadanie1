require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./app/models/userModel");
const userController = require("./app/controllers/userApiController");
const functions = require("./app/functions");
const userApiRouter = require("./app/routers/userApiRouter");
const userRouter = require("./app/routers/userRouter");
const hbs = require("express-handlebars");

mongoose.connect("mongodb://127.0.0.1:27017/express-zadanie1");

app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

functions.loadJSONData();

app.get("/", (req, res) => {
  res.render("./layouts/main");
});

/* ROUTES */
app.use("/api/users", userApiRouter);
app.use("/users", userRouter);

app.listen(process.env.APP_PORT || 8080, () => {
  console.log("Server connected via port: " + (process.env.APP_PORT || 8080));
});
