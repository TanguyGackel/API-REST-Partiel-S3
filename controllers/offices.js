const officeMdl = require('../models/offices');

exports.allOffices = (req, res) => {
    officeMdl.getAllOffices((error, results) => {
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

exports.nbOffices = (req, res) => {
    officeMdl.getNbOffices((error, results) => {
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