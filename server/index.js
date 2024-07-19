// Entry point to our application.

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")
// Middleware handler
app.use(cors());
app.use(express.json()); // able to get json data from incoming request object

// Routes for application

// create todo entry


// update todo entry


// delete todo entry


// get todo entry

// endRoutes

app.listen(5000, () => {
    console.log("Server started")
})