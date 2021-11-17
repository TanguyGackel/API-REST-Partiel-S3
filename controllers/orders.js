const ordersMdl = require('../models/orders');
const orderDetailsMdl = require('../models/orderdetails');

exports.lastOrdersByCustomerId = (req, res) => {
    ordersMdl.getLastOrdersByCustomersId(req.params.id, (error,results) => {
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

exports.createOrderForCustomerWithListOfOrderDetails = (req, res) => {
    const dataOrder = {
        customerNumber : req.body.customerNumber,
        orderNumber : req.body.orderNumber,
        orderDate : req.body.orderDate,
        requiredDate : req.body.requiredDate,
        status : req.body.status
    };
    ordersMdl.createOrder(dataOrder, (error, results) => {
        for (i = 0; i < req.body.nbOrderDetails; i++) {
            const dataOrderDetails = {
                orderNumber : req.body.orderNumber,
                productCode : req.body.productCode[i],
                quantityOrdered : req.body.quantityOrdered[i],
                priceEach : req.body.priceEach[i],
                orderLineNumber : i+1
            }
            orderDetailsMdl.createOrderDetails(dataOrderDetails, (error, results) => {
            });
        }
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