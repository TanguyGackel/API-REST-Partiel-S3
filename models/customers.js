const mysql = require('mysql');
const db = require('../config/db');

exports.getAllCustomers = (callback) => {
    db.query('SELECT * FROM customers;', (error,results) => {
            if(error){
                return callback(error);
            }
            return callback(null, results);
    });
};

exports.getNbCustomers = (callback) => {
    db.query('SELECT COUNT(customerNumber) AS CustomerNumbers FROM customers;', (error, results) => {
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

exports.getCustomersByEmployeeId = (data, callback) => {
    db.query('SELECT * FROM customers WHERE salesRepEmployeeNumber = ' + mysql.escape(data) + ';', (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    })
}

exports.createCustomer = (data, callback) => {
    db.query('INSERT INTO customers (customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit) ' +
        'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);', [data.customerNumber, data.customerName, data.contactLastName, data.contactFirstName, data.phone, data.addressLine1, data.addressLine2, data.city, data.state, data.postalCode, data.country, data.salesRepEmployeeNumber, data.creditLimit], (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results)
    })
}

exports.updateCustomer = (data, callback) => {
    db.query('UPDATE customers SET customerName = ?, contactLastName = ?, contactFirstName = ?, phone = ?, addressLine1 = ?, addressLine2 = ?, city = ?, state = ?, postalCode = ?, country = ?, salesRepEmployeeNumber = ?, creditLimit = ? WHERE customerNumber = ?;',
        [data.customerName, data.contactLastName, data.contactFirstName, data.phone, data.addressLine1, data.addressLine2, data.city, data.state, data.postalCode, data.country, data.salesRepEmployeeNumber, data.creditLimit, data.customerNumber],
        (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    })
}

exports.deleteCustomer = (data, callback) => {
    db.query('DELETE FROM customers WHERE customerNumber = ' + mysql.escape(data) + ';', (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    })
}

exports.getCustomersWhoDidntPayByYear = (data, callback) => {
    db.query('SELECT * FROM customers' +
        ' WHERE customerNumber NOT IN (SELECT customerNumber FROM payments' +
        ' WHERE DATE_FORMAT(paymentDate, "%Y") = ' + mysql.escape(data) + ');', (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}