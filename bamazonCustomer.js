var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazona"
})

connection.connect(function(err){
    if(err)throw err;
     console.log("Connection is here!")
});


