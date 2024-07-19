// Entry point to our application.

const express = require("express");
const app = express();
const cors = require("cors");

// Middleware handler
app.use(cors());
app.use(express.json()); // able to get json data from incoming request object


app.listen(5000, () => {
    console.log("Server started")
})