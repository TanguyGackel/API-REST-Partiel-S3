const express = require('express');

const router = express.Router();

const paymentsCtrl = require('../controllers/payments');

router.get('/month/:annee', paymentsCtrl.monthHighestPayments);
router.get('/:date', paymentsCtrl.paymentsByDate);
router.post('/betweendates', paymentsCtrl.paymentsBetweenTwoDates);
router.post('/betweenmonths', paymentsCtrl.paymentsBetweenTwoMonths);

module.exports = router;