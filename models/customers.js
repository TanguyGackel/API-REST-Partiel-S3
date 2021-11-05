const mysql = require('mysql');
const db = require('../config/db');
// mysql.escape()

exports.getAllCustomers = (callback) => {
    db.query('SELECT * FROM customers;', (error,results) => {
            if(error){
                return callback(error);
            }
            return callback(null, results);
    });
};

exports.getNbCustomers = (callback) => {
    db.query('SELECT COUNT(customerNumber) as CustomerNumbers FROM customers;', (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
};

exports.getCustomersById = (data, callback) => {
    db.query('SELECT * FROM customers WHERE customerNumber = ' + mysql.escape(data) + ';', (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    })
}