const customersMdl = require('../models/customers');

exports.listAllCustomers = (req, res) => {
    customersMdl.getAllCustomers((error,results) => {
        if(error){
            return res.status(400).send({
                success: 0,
                data: error
            })
        }
        return res.status(200).send({
            success: 1,
            data: results
        });
    });
};

exports.nbCustomers = (req, res) => {
    customersMdl.getNbCustomers((error, results) => {
        if(error){
            return res.status(400).send({
                success: 0,
                data: error
            })
        }
        return res.status(200).send({
            success: 1,
            data: results
        });
    });
};

exports.customerById = (req, res) => {
    customersMdl.getCustomersById(req.params.id, (error, results) => {
        if(error){
            return res.status(400).send({
                success: 0,
                data: error
            })
        }
        if(typeof results !== 'undefined'){
            return res.status(404).send({
                success: 0,
                data: 'Not Found'
            })
        }
        return res.status(200).send({
            success: 1,
            data: results
        })
    })
}