const mysql = require('mysql');
const db = require('../config/db');

exports.getAllEmployees = (callback) => {
    db.query('SELECT * FROM employees;', (error,results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}

exports.getBestEmployees = (callback) => {
    db.query('SELECT COUNT(customers.salesRepEmployeeNumber)  as CustomersNumber, employees.employeeNumber, employees.lastName, employees.firstName, employees.jobTitle FROM employees ' +
        'JOIN customers ON employees.employeeNumber = customers.salesRepEmployeeNumber ' +
        'GROUP BY customers.salesRepEmployeeNumber ' +
        'ORDER BY CustomersNumber DESC ' +
        'LIMIT 2;', (error,results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}

exports.getBestEmployeesByPayments = (callback) => {
    db.query('SELECT SUM(payments.amount) as chiffreAffaire, employees.employeeNumber, employees.lastName, employees.firstName, employees.jobTitle FROM employees ' +
        'JOIN customers ON employees.employeeNumber = customers.salesRepEmployeeNumber ' +
        'JOIN payments ON customers.customerNumber = payments.customerNumber ' +
        'GROUP BY employees.employeeNumber ' +
        'ORDER BY chiffreAffaire DESC ' +
        'LIMIT 2;', (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}

exports.getEmployeeById = (data, callback) => {
    db.query('SELECT * FROM employees WHERE employeeNumber = ' + mysql.escape(data) + ';', (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}

exports.getEmployeesByOffice = (data, callback) => {
    db.query('SELECT * FROM employees WHERE officeCode = ' + mysql.escape(data) + ';', (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}