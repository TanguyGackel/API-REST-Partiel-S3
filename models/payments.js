const mysql = require('mysql');
const db = require('../config/db');

exports.getMonthHighestPayments = (data, callback) => {
    db.query('SELECT DATE_FORMAT(paymentDate, "%M") as Mois, SUM(amount) as Montant FROM payments WHERE DATE_FORMAT(paymentDate, "%Y") = ' + mysql.escape(data) +
    ' GROUP BY DATE_FORMAT(paymentDate, "%m") ORDER BY SUM(amount) DESC LIMIT 1;', (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}

exports.getPaymentsByDate = (data, callback) => {
    db.query('SELECT SUM(amount) as TotalPayments FROM payments WHERE paymentDate = ' + mysql.escape(data) + ";", (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}