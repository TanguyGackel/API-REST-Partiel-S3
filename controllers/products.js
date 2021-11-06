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