const express = require('express');

const router = express.Router();

const employeesCtrl = require('../controllers/employees');

router.get('/', employeesCtrl.allEmployees);
/**
 * @swagger
 * /api/employees:
 *  get:
 *      description: Used to get all employees
 *      tags:
 *          - employees
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/best', employeesCtrl.bestEmployees);
/**
 * @swagger
 * /api/employees/best:
 *  get:
 *      description: Used to get 2 best employees
 *      tags:
 *          - employees
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/best/bypayments', employeesCtrl.bestEmployeesByPayments);
/**
 * @swagger
 * /api/employees/best/bypayments:
 *  get:
 *      description: Used to get 2 best employees by payments
 *      tags:
 *          - employees
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/:id', employeesCtrl.employeeById);
router.get('/offices/:office', employeesCtrl.employeeByOffice);
router.get('/reportsto/:id', employeesCtrl.reportsToById);

module.exports = router;