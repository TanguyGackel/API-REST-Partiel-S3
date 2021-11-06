const express = require('express');

const router = express.Router();

const orderDetailsCtrl = require('../controllers/orderdetails');

router.post('/', orderDetailsCtrl.addProductToOrder);
router.delete('/', orderDetailsCtrl.deleteProductToOrder);
router.put('/', orderDetailsCtrl.updateProductToOrder);

module.exports = router;