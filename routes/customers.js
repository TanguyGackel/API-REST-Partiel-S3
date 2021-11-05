const express = require('express');

const router = express.Router();

const customersCtrl = require('../controllers/customers');

router.get('/', customersCtrl.listAllCustomers);

module.exports = router;