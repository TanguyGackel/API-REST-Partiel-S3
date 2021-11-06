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