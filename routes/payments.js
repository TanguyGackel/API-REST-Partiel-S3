const express = require('express');

const router = express.Router();

const paymentsCtrl = require('../controllers/payments');

router.get('/month/:annee', paymentsCtrl.monthHighestPayments);//TODO swagger
router.get('/:date', paymentsCtrl.paymentsByDate);///TODO swagger
router.get('/:premdate/:secdate', paymentsCtrl.paymentsBetweenTwoDates);//TODO swagger
router.get('/:date/:premmois/:secmois', paymentsCtrl.paymentsBetweenTwoMonths); //TODO réparer ça et swagger

module.exports = router;