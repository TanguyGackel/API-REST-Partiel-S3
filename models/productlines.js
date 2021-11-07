const db = require('../config/db');

exports.getAllProductLines = (callback) => {
    db.query('SELECT * FROM productlines', (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}