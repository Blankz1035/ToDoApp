const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PWORD,
    host: "localhost",
    port: 5432,
    database: "todoapp"
})

module.exports = pool