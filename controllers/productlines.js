const productLinesMdl = require('../models/productlines');

exports.allProductLines = (req, res) => {
    productLinesMdl.getAllProductLines((error, results) => {
        if(error){
            return res.status(400).send({
                success: 0,
                data: error
            });
        }
        return res.status(200).send({
            success: 1,
            data: results
        });
    });
}