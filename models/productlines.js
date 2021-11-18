const db = require('../config/mysql.config');

exports.getAllProductLines = (callback) => {
    db.query('SELECT * FROM productlines', (error, results) => {
        if(error){
            return callback(error);
        }
        return callback(null, results);
    });
}