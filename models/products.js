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

