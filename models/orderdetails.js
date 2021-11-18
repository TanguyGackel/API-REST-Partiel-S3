const mysql = require('mysql');
const db = require('../config/mysql.config');

exports.createOrderDetails = (data, callback) => {
    db.query('INSERT INTO orderdetails (orderNumber, productCode, quantityOrdered, priceEach, orderLineNumber) VALUES (?, ?, ?, ?, ?)',
        [data.orderNumber, data.productCode, data.quantityOrdered, data.priceEach, data.orderLineNumber], (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results)
    });
}

exports.deleteOrderDetails = (data, callback) => {
    db.query('DELETE FROM orderdetails WHERE orderNumber = ' + mysql.escape(data.orderNumber) + ' AND productCode = ' + mysql.escape(data.productCode) + ';', (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results)
    });
}

exports.updateQuantity = (data, callback) => {
    db.query('UPDATE orderdetails set quantityOrdered = ' + mysql.escape(data.quantityOrdered) + ' WHERE orderNumber = ' + mysql.escape(data.orderNumber) + ' AND productCode = ' + mysql.escape(data.productCode) + ';', (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results)
    });
}