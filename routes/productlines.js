const express = require('express');

const router = express.Router();

const productLinesCtrl = require('../controllers/productLines');

router.get('/', productLinesCtrl.allProductLines);

module.exports = router;