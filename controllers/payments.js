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

exports.paymentsBetweenTwoDates = (req, res) => {
    const data = {
        un : req.body.premiereAnnee,
        deux : req.body.secondeAnnee
    }
    paymentsMdl.getPaymentsBetweenTwoDates(data, (error, results) => {
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

exports.paymentsBetweenTwoMonths = (req, res) => {
    const data = {
        un : req.body.premierMois,
        deux : req.body.secondMois,
        annee : req.body.annee
    }
    paymentsMdl.getPaymentsBetweenTwoMonths(data, (error, results) => {
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