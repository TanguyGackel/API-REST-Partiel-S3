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

exports.newOffice = (req, res) => {
    const data = {
        officeCode : req.body.officeCode,
        city : req.body.city,
        phone : req.body.phone,
        addressLine1 : req.body.addressLine1,
        addressLine2 : req.body.addressLine2,
        state : req.body.state,
        country : req.body.country,
        postalCode : req.body.postalCode,
        territory : req.body.territory
    }
    officeMdl.addNewOffice(data, (error, results) =>  {
        if(error){
            return res.status(400).send({
                success: 0,
                data: error
            });
        }
        return res.status(201).send({
            success: 1,
            data: results
        });
    });
}

exports.updateOffice = (req, res) => {
    const data = {
        officeCode : req.body.officeCode,
        city : req.body.city,
        phone : req.body.phone,
        addressLine1 : req.body.addressLine1,
        addressLine2 : req.body.addressLine2,
        state : req.body.state,
        country : req.body.country,
        postalCode : req.body.postalCode,
        territory : req.body.territory
    }
    officeMdl.updateOneOffice(data, (error, results) =>  {
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

exports.deleteOffice = (req, res) => {
    officeMdl.deleteOneOffice(req.params.id, (error, results) =>  {
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