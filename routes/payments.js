const express = require('express');

const router = express.Router();

const paymentsCtrl = require('../controllers/payments');

router.get('/month/:annee', paymentsCtrl.monthHighestPayments);
router.get('/:date', paymentsCtrl.paymentsByDate);
router.get('/:premdate/:secdate', paymentsCtrl.paymentsBetweenTwoDates);
router.get('/:date/:premmois/:secmois', paymentsCtrl.paymentsBetweenTwoMonths); //TODO réparer ça

module.exports = router;