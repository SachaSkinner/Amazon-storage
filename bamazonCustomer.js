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
    console.log("connected as id: " + connection.threadId)
    Start()
    connection.end();
});

function Start(){
    connection.query('SELECT * FROM products', function(err, rows, fields)   
    {  
        if(err)throw err;  
        console.table(rows);  
        console.log("Here are our fresh and neat Bamazona products!");
        
    }); 
} 

