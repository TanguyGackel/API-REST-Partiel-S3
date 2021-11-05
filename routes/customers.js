const express = require('express');

const router = express.Router();

const customersCtrl = require('../controllers/customers');

router.get('/', customersCtrl.listAllCustomers);
router.get('/nb', customersCtrl.nbCustomers);
router.get('/:id', customersCtrl.customerById);

module.exports = router;