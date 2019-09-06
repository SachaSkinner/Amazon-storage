var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazona"
})


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadId)
    Start()
    connection.end();
});

function Start() {
    connection.query('SELECT * FROM products', function (err, rows) {
        if (err) throw err;
        console.table(rows);
        console.log("Here are our fresh and neat Bamazona products!");
        console.log("-----------------------------");
        postMessages(rows);
        // console.log(rows[0].item_id);

    });
}

var postMessages = function (database) {
    inquirer.prompt([{
        name: "item",
        type: "input",
        message: "What product ID would you like to buy?",
        validate: function (val) {

            return !isNaN(val)
        }
    }, {
        name: "quantity",
        type: "input",
        message: "How many items of this product would you like to purchase?",
        validate: function (val) {

            return !isNaN(val);
        }
    }]).then(function (answer) {
        console.log(database);

        var answerID = parseInt(answer.item);
        var answerQuantity = parseInt(answer.quantity);


        if (ifIdExists()) {

            if (answerQuantity > database[answerID].stock_quantity) {
                return console.log("Not enough supplies though, sorry..");
            }
            return console.log("Your total is here.....!");
        }


        function ifIdExists() {

            for (var i = 0; i < database.length; i++) {
                if (answerID === database[i].item_id) {
                    console.log("Nice choice!");
                    return true;
                }
            }
            console.log("No such thing!");
            return false;
        }

    })
}