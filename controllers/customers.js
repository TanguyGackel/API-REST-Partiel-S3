const customersMdl = require('../models/customers');

exports.allCustomers = (req, res) => {
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
            });
        }
        return res.status(200).send({
            success: 1,
            data: results
        });
    });
};

exports.oneCustomerById = (req, res) => {
    customersMdl.getCustomersById(req.params.id, (error, results) => {
        if(error){
            return res.status(400).send({
                success: 0,
                data: error
            });
        }
        if(results.length <= 0){
            return res.status(404).send({
                success: 0,
                data: 'Not Found'
            });
        }
        return res.status(200).send({
            success: 1,
            data: results
        });
    });
}

exports.customerByEmployeeId = (req, res) => {
    customersMdl.getCustomersByEmployeeId(req.params.id, (error, results) => {
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

exports.createOneCustomer = (req, res) => {
    const data = {
        customerNumber: req.body.customerNumber,
        customerName: req.body.customerName,
        contactLastName: req.body.contactLastName,
        contactFirstName: req.body.contactFirstName,
        phone: req.body.phone,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        state: req.body.state,
        postalCode: req.body.postalCode,
        country: req.body.country,
        salesRepEmployeeNumber: req.body.salesRepEmployeeNumber,
        creditLimit: req.body.creditLimit
    }
    customersMdl.createCustomer(data, (error, results) => {
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

exports.updateOneCustomer = (req, res) => {
    const data = {
        customerNumber: req.body.customerNumber,
        customerName: req.body.customerName,
        contactLastName: req.body.contactLastName,
        contactFirstName: req.body.contactFirstName,
        phone: req.body.phone,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        state: req.body.state,
        postalCode: req.body.postalCode,
        country: req.body.country,
        salesRepEmployeeNumber: req.body.salesRepEmployeeNumber,
        creditLimit: req.body.creditLimit
    }
    customersMdl.updateCustomer(data, (error, results) => {
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

exports.deleteOneCustomer = (req, res) => {
    customersMdl.deleteCustomer(req.params.id, (error, results) => {
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

exports.customersWhoDidntPayByYear = (req, res) => {
    customersMdl.getCustomersWhoDidntPayByYear(req.params.id, (error, results) => {
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