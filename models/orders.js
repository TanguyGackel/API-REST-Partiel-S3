const mysql = require('mysql');
const db = require('../config/db');

exports.getLastOrdersByCustomersId = (data, callback) => {
    db.query('SELECT * FROM orders WHERE customerNumber = ' + mysql.escape(data) + 'ORDER BY orderDate ASC LIMIT 1;', (error,results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}

exports.createOrder = (data, callback) => {
    db.query('INSERT INTO orders (orderNumber, orderDate, requiredDate, shippedDate, status, comments, customerNumber) VALUES (?,?,?,?,?,?,?);', [data.orderNumber, data.orderDate, data.requiredDate, null, data.status, null, data.customerNumber], (error,results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}