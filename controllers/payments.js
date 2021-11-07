const paymentsMdl = require('../models/payments');

exports.monthHighestPayments = (req, res) => {
    paymentsMdl.getMonthHighestPayments(req.params.annee, (error, results) => {
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

exports.paymentsByDate = (req, res) => {
    paymentsMdl.getPaymentsByDate(req.params.date, (error, results) => {
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