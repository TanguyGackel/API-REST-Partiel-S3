const express = require('express');

const router = express.Router();

const customersCtrl = require('../controllers/customers');

router.get('/', customersCtrl.allCustomers);
/**
 * @swagger
 * /api/customers:
 *  get:
 *      description: Used to get all customers
 *      tags:
 *          - customers
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/nb', customersCtrl.nbCustomers);
/**
 * @swagger
 * /api/customers/nb:
 *  get:
 *      description: Used to get the numbers of customers
 *      tags:
 *          - customers
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/:id', customersCtrl.oneCustomerById);

router.get('/byemployee/:id', customersCtrl.customerByEmployeeId);
router.post('/', customersCtrl.createOneCustomer);
/**
 * @swagger
 * /api/customers:
 *   post:
 *      description: Used to add a new customer
 *      tags:
 *          - customers
 *      parameters:
 *          - in: body
 *            name: customers
 *            schema:
 *              type: object
 *              required:
 *                 - customerNumber
 *                 - customerName
 *                 - contactLastName
 *                 - contactFirstName
 *                 - phone
 *                 - addressLine1
 *                 - addressLine2
 *                 - city
 *                 - state
 *                 - postalCode
 *                 - country
 *                 - salesRepEmployeeNumber
 *                 - creditLimit
 *              properties:
 *                  customerNumber:
 *                      type: integer
 *                      example: 100
 *                      required: true
 *                  customerName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: John Doe
 *                      required: true
 *                  contactLastName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Doe
 *                      required: true
 *                  contactFirstName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      required: true
 *                      example: John
 *                  phone:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      required: true
 *                      example: 0102030405
 *                  addressLine1:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      required: true
 *                      example: 10 John Doe Street
 *                  addressLine2:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      required: false
 *                      example: building A
 *                  city:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      required: true
 *                      example: New York
 *                  state:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      required: false
 *                      example: New York State
 *                  postalCode:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      required: false
 *                      example: New York
 *                  country:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      required: true
 *                      example: New York
 *                  salesRepEmployeeNumber:
 *                      type: integer
 *                      example: 1002
 *                  creditLimit:
 *                      type: integer
 *                      example: 10000
 *      responses:
 *          '201':
 *              description: Resource created successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put('/', customersCtrl.updateOneCustomer);
router.delete('/:id', customersCtrl.deleteOneCustomer);
router.get('/customerswhodidntpaybyyear/:id', customersCtrl.customersWhoDidntPayByYear);

module.exports = router;