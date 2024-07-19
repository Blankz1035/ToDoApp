// Entry point to our application.
require('dotenv').config();

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")
// Middleware handler
app.use(cors());
app.use(express.json()); // able to get json data from incoming request object

//--- Routes for application (strong note: application is not for production, so SQL injection handling is not completed.)
//-> utilizing async to await transactions.

// create todo entry : POST http://localhost:5000/todos
app.post("/todos", async(req,res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", 
            [description]
        )

        res.json(newTodo.rows[0])
    } catch (error) {
        console.log(error.message);
    }
})

// update todo entry


// delete todo entry


// get all todo entry GET http://localhost:5000/todos
app.get("/todos", async(req,res) =>{
    try {
        const allTodos = await pool.query("SELECT * FROM todo");

        res.json(allTodos.rows);
    } catch (error) {
        console.log(error.message)
    }
})

// get a todo entry
app.get("/todos/:id", async(req,res) =>{
    try {
        // url params should be seen as req.params
        const { id } = req.params;

        const todoItem = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1", 
            [id]
        );

        res.json(todoItem.rows);
    } catch (error) {
        console.log(error.message)
    }
})


// endRoutes

app.listen(5000, () => {
    console.log("Server started")
}) 