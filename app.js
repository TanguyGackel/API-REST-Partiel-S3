const app = require("express")();
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD
});

con.connect(function (err){
    if(err) throw err;
    console.log("Connecté à la base de donnée MySQL")
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

module.exports = app;