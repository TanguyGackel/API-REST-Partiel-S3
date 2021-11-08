const express = require('express');

const router = express.Router();

const employeesCtrl = require('../controllers/employees');

router.get('/', employeesCtrl.allEmployees);
router.get('/best', employeesCtrl.bestEmployees);
router.get('/best/bypayments', employeesCtrl.bestEmployeesByPayments);
router.get('/:id', employeesCtrl.employeeById);
router.get('/offices/:office', employeesCtrl.employeeByOffice);
router.get('/reportsto/:id', employeesCtrl.reportsToById);

module.exports = router;