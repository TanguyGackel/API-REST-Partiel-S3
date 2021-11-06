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