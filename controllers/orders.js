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
            console.log(i);
            console.log((req.body.productCode[i]))
            const dataOrderDetails = {
                orderNumber : req.body.orderNumber,
                productCode : req.body.order.productCode[i],
                quantityOrdered : req.body.order.quantityOrdered[i],
                priceEach : req.body.order.priceEach[i],
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