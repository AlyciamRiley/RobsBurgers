//Set up MySQL Connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Jonsnow123",
    database: "burgers_db"
});

// Make Connection
connection.connect(function(err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connectin for our own ORM to use
module.exports = connection;