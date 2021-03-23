

const express = require('express');
const app = express();


const sql = require('msnodesqlv8');

const bodyParser = require('body-parser')
const path = require('path')

//hantera inkommande data som json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static(path.join(__dirname, 'public')));



const connString = "server=.;Database=Blackjack;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

app.post("/AddUser/", (request) => {

    let username = request.body.Username;
    let password = request.body.Password;

    let sqlCode = "INSERT INTO Users (Username, Password) VALUES ('" + username + "','" + password + "')";

    sql.query(connString, sqlCode, (error, result) => {

        if(error){
            console.log("error occured: " + error);
        }
        else{
            console.log("User saved");
        }
    });
});

app.post("/Login/", (request, response) => {


    let username = request.body.Username;
    let password = request.body.Password;

    let sqlCode = "SELECT * FROM Users WHERE Username = '" + username + "' and Password = '" + password +"'"

    sql.query(connString, sqlCode, (error, result) => {

        if(error){
            console.log("error occured: " + error);
        }
        else{

            response.json(result);
        }
    });
});

app.post("/CheckUsername/", (request, response) => {

    let username = request.body.Username;

    let sqlCode = "SELECT * FROM Users WHERE Username = '" + username + "'";

    sql.query(connString, sqlCode, (error, result) => {

        if(error){
            console.log("error occured: " + error);
        }
        else{

            response.json(result);
        }
    });
});

app.post("/UpdateBalance/", (request) => {

    let amount = request.body.Balance;
    let username = request.body.Username;

    let sqlCode = "UPDATE Users SET Balance = '" + amount + "' WHERE Username = '" + username + "'";

    sql.query(connString, sqlCode, (error, result) => {

        if(error){
            console.log("error occured: " + error);
        }
        else{

            console.log('Balance updated.')
        }
    });
});

app.post("/AddUser/", (request) => {

    let username = request.body.Username;
    let password = request.body.Password;

    let sqlCode = "INSERT INTO Users (Username, Password) VALUES ('" + username + "','" + password + "')";

    sql.query(connString, sqlCode, (error, result) => {

        if(error){
            console.log("error occured: " + error);
        }
        else{
            console.log("User saved");
        }
    });
});



app.listen(8080)
console.log("lyssnar på port 8080")


//npm init -f                       	      Skapar package.json
//npm install express --save        Installerar webservermoduler
//npm install body-parser --save    H�lpmodul f�r att posta data
//npm install msnodesqlv8 --save  Installerar SQL-Server modul
