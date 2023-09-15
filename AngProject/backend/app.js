const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const postsRoute = require("./posts");
const usersRoute = require("./users");

const app = express();

app.use(bodyParser.json());
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

mongoose
  .connect(
    "mongodb+srv://Ankit_Singh:A7g0N7Xq0UT7cfiy@cluster0.ileuu21.mongodb.net/node-angular?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connection established");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

app.use("/api/posts", postsRoute);
app.use("/api/users", usersRoute);

module.exports = app;
