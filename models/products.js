const mysql = require('mysql');
const db = require('../config/db');

exports.getProductsByOrder = (data, callback) => {
    db.query('SELECT products.productCode, productName, productLine, productScale, productVendor, productDescription, quantityInStock, buyPrice, MSRP FROM products JOIN orderdetails ON orderdetails.productCode = products.productCode WHERE orderdetails.orderNumber = ' + mysql.escape(data) + ';', (error,results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}

exports.addOneProduct = (data, callback) => {
    db.query('INSERT INTO products (productCode, productName, productLine, productScale, productVendor, productDescription, quantityInStock, buyPrice, MSRP) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [data.productCode, data.productName, data.productLine, data.productScale, data.productVendor, data.productDescription, data.quantityInStock, data.buyPrice, data.MSRP], (error,results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}

exports.deleteOneProduct = (data, callback) => {
    db.query('DELETE FROM products WHERE productCode = ' + mysql.escape(data) + ';', (error,results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}

exports.updateOneProduct = (data, callback) => {
    db.query('UPDATE products SET productName = ?, productLine = ?, productScale = ?, productVendor = ?, productDescription = ?, quantityInStock = ?, buyPrice = ?, MSRP = ? WHERE productCode = ?', [data.productName, data.productLine, data.productScale, data.productVendor, data.productDescription, data.quantityInStock, data.buyPrice, data.MSRP, data.productCode], (error,results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}

exports.ProductOrderByOrdersLimitThree = (callback) => {
    db.query('SELECT productCode, SUM(quantityOrdered) AS TotalCommande FROM orderdetails ' +
        'GROUP BY productCode ' +
        'ORDER BY TotalCommande DESC ' +
        'LIMIT 3;', (error,results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}

exports.ProductOrderByPriceOrdersLimitThree = (callback) => {
    db.query('SELECT productCode, SUM(priceEach*quantityOrdered) AS TotalPrice FROM orderdetails GROUP BY productCode ORDER BY TotalPrice DESC LIMIT 3;', (error,results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}

exports.getProductsByYearButNotAnotherYear = (data, callback) => {
    db.query('SELECT products.productCode, productName, productLine, productScale, productVendor, productDescription, quantityInStock, buyPrice, MSRP FROM products' +
    ' JOIN orderdetails on orderdetails.productCode = products.productCode' +
    ' JOIN orders on orders.orderNumber = orderdetails.orderNumber' +
    ' WHERE DATE_FORMAT(orders.orderDate, "%Y") = ' + mysql.escape(data.bonneannee) +
    ' AND products.productCode NOT IN' +
    ' (SELECT productCode FROM orderdetails' +
    ' JOIN orders on orders.orderNumber = orderdetails.orderNumber' +
    ' WHERE DATE_FORMAT(orders.orderDate, "%Y") = ' + mysql.escape(data.mauvaiseannee) + ');', (error,results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}