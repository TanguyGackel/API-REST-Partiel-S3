const customersMdl = require('../models/customers');

exports.listAllCustomers = (req,res)=>{
    customersMdl.getAllCustomers((error,results)=>{
        if(error){
            console.log(error);
            return res.status(400).send({
                success:0,
                data:"Bad request"
            })
        }
        return res.status(200).send({
            success:1,
            data:results
        });
    });
};