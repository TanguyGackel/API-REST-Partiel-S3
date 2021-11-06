const express = require('express');

const router = express.Router();

const customersCtrl = require('../controllers/customers');

router.get('/', customersCtrl.AllCustomers);
router.get('/nb', customersCtrl.nbCustomers);
router.get('/:id', customersCtrl.OneCustomerById);
router.get('/byemployee/:id', customersCtrl.customerByEmployeeId);
router.post('/', customersCtrl.createOneCustomer);

module.exports = router;