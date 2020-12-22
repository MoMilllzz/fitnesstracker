// Dependencies
const express = require("express");
const mongoose = require("mongoose");
//logs all requests to the console
const morgan = require("morgan");

//sets up instance of express
const PORT = process.env.PORT || 8080;
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.static("public")); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connection to mongoDB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker"

mongoose.connect(MONGODB_URI,{
  useNewUrlParser: true,
  useFindAndModify: false
});


//Routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

//server starts listening
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });