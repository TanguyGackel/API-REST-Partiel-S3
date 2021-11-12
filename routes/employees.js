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
/**
 * @swagger
 * /api/employees/{id}:
 *  get:
 *      description: Used to get employee by ID
 *      tags:
 *          - employees
 *      parameters:
 *          - in : path
 *            name: id
 *            type: integer
 *            description: Employee id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/offices/:office', employeesCtrl.employeeByOffice);
/**
 * @swagger
 * /api/employees/offices/{office}:
 *  get:
 *      description: Used to get employees by offices
 *      tags:
 *          - employees
 *      parameters:
 *          - in : path
 *            name: office
 *            type: integer
 *            description: Office id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/reportsto/:id', employeesCtrl.reportsToById);
/**
 * @swagger
 * /api/employees/reportsto/{id}:
 *  get:
 *      description: Used to get employees by their hierarchic superior ID
 *      tags:
 *          - employees
 *      parameters:
 *          - in : path
 *            name: id
 *            type: integer
 *            description: superior id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
module.exports = router;