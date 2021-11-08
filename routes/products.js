const express = require('express');

const router = express.Router();

const productsCtrl = require('../controllers/products');

router.get('/orders/:id', productsCtrl.productsByOrder);
router.post('/', productsCtrl.NewProduct);
router.delete('/:id', productsCtrl.deleteProduct);
router.put('/', productsCtrl.updateProduct);
router.get('/mostorder', productsCtrl.MostOrderProducts)
router.get('/mostorderexpensive', productsCtrl.MostOrderExpensiveProducts)
router.post('/byyearbutnotanotheryear', productsCtrl.productByYearButNotAnotherYear);

module.exports = router;