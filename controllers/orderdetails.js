const orderDetailsMdl = require('../models/orderdetails');

exports.addProductToOrder = (req, res) => {
    const data = {
        orderNumber: req.body.orderNumber,
        productCode: req.body.productCode,
        quantityOrdered: req.body.quantityOrdered,
        priceEach: req.body.priceEach,
        orderLineNumber: req.body.orderNumber
    }
    orderDetailsMdl.createOrderDetails(data, (error, results) => {
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
exports.deleteProductToOrder = (req, res) => {
    const data = {
        orderNumber: req.body.orderNumber,
        productCode: req.body.productCode
    }
    orderDetailsMdl.deleteOrderDetails(data, (error, results) => {
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

exports.updateProductToOrder = (req, res) => {
    const data = {
        orderNumber: req.body.orderNumber,
        productCode: req.body.productCode,
        quantityOrdered: req.body.quantityOrdered
    }
    orderDetailsMdl.updateQuantity(data, (error, results) => {
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