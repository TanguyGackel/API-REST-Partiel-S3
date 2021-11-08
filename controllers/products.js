const productsMdl = require('../models/products');

exports.productsByOrder = (req, res) => {
    productsMdl.getProductsByOrder(req.params.id,  (error,results) => {
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

exports.NewProduct = (req, res) => {
    const data = {
        productCode: req.body.productCode,
        productName : req.body.productName,
        productLine : req.body.productLine,
        productScale : req.body.productScale,
        productVendor : req.body.productVendor,
        productDescription : req.body.productVendor,
        quantityInStock : req.body.quantityInStock,
        buyPrice : req.body.buyPrice,
        MSRP : req.body.MSRP
    }
    productsMdl.addOneProduct(data, (error,results) => {
        if(error){
            return res.status(400).send({
                success: 0,
                data: error
            })
        }
        return res.status(201).send({
            success: 1,
            data: results
        });
    });
}

exports.deleteProduct = (req, res) => {
    productsMdl.deleteOneProduct(req.params.id, (error,results) => {
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

exports.updateProduct = (req, res) => {
    const data = {
        productCode: req.body.productCode,
        productName : req.body.productName,
        productLine : req.body.productLine,
        productScale : req.body.productScale,
        productVendor : req.body.productVendor,
        productDescription : req.body.productVendor,
        quantityInStock : req.body.quantityInStock,
        buyPrice : req.body.buyPrice,
        MSRP : req.body.MSRP
    }
    productsMdl.updateOneProduct(data, (error,results) => {
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

exports.MostOrderProducts = (req, res) => {
    productsMdl.ProductOrderByOrdersLimitThree((error,results) => {
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

exports.MostOrderExpensiveProducts = (req, res) => {
    productsMdl.ProductOrderByPriceOrdersLimitThree((error,results) => {
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