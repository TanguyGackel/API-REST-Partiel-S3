const express = require('express');

const router = express.Router();

const customersCtrl = require('../controllers/customers');

router.get('/', customersCtrl.allCustomers);
router.get('/nb', customersCtrl.nbCustomers);
router.get('/:id', customersCtrl.oneCustomerById);
router.get('/byemployee/:id', customersCtrl.customerByEmployeeId);
router.post('/', customersCtrl.createOneCustomer);
router.put('/', customersCtrl.updateOneCustomer);
router.delete('/:id', customersCtrl.deleteOneCustomer);

module.exports = router;