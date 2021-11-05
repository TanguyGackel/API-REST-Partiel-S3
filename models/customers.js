const db = require("../config/db");
// mysql.escape()

exports.getAllCustomers = (callback)=>{
    db.query("SELECT * FROM customers",
        (error,results)=> {
            if(error){
                return callback(error);
            }else{
                return callback(null,results);
            }
        });
};