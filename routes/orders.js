const express = require('express');

const router = express.Router();

const ordersCtrl = require('../controllers/orders');

router.get('/customers/:id', ordersCtrl.lastOrdersByCustomerId);
router.post('/', ordersCtrl.createOrderForCustomerWithListOfOrderDetails);

module.exports= router;