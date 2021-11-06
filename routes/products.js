const express = require('express');

const router = express.Router();

const productsCtrl = require('../controllers/products');

router.get('/orders/:id', productsCtrl.productsByOrder);

module.exports = router;