const mysql  = require('mysql');
const db = require('../config/db');

exports.getAllOffices = (callback) => {
    db.query('SELECT * FROM offices', (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}

exports.getNbOffices = (callback) => {
    db.query('SELECT COUNT(officeCode) AS OfficeNumbers FROM offices', (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}

exports.addNewOffice = (data, callback) => {
    db.query('INSERT INTO offices (officeCode, city, phone, addressLine1, addressLine2, state, country, postalCode, territory) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [data.officeCode, data.city, data.phone, data.addressLine1, data.addressLine2, data.state, data.country, data.postalCode, data.territory], (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}

exports.updateOneOffice = (data, callback) => {
    db.query('UPDATE offices SET city = ?, phone = ?, addressLine1 = ?, addressLine2 = ?, state = ?, country = ?, postalCode = ?, territory = ? WHERE officeCode = ?;',
        [data.city, data.phone, data.addressLine1, data.addressLine2, data.state, data.country, data.postalCode, data.territory, data.officeCode], (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}

exports.deleteOneOffice = (data, callback) => {
    db.query('DELETE FROM offices WHERE officeCode = ' + mysql.escape(data), (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}