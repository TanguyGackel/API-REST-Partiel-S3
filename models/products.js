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