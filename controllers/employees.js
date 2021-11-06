const employeesMdl = require('../models/employees');

exports.allEmployees = (req, res) => {
    employeesMdl.getAllEmployees((error,results) => {
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
}

exports.bestEmployees = (req, res) => {
    employeesMdl.getBestEmployees((error, results) => {
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
}

exports.bestEmployeesByPayments = (req, res) => {
    employeesMdl.getBestEmployeesByPayments((error, results) => {
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
}

exports.employeeById = (req, res) => {
    employeesMdl.getEmployeeById(req.params.id, (error, results) => {
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
}

exports.employeeByOffice = (req, res) => {
    employeesMdl.getEmployeesByOffice(req.params.office, (error, results) => {
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
}