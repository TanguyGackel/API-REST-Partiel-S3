const express = require('express');

const router = express.Router();

const officeCtrl = require('../controllers/offices');

router.get('/', officeCtrl.allOffices);
/**
 * @swagger
 * /api/offices:
 *  get:
 *      description: Used to get all offices
 *      tags:
 *          - offices
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/nb', officeCtrl.nbOffices);
/**
 * @swagger
 * /api/offices/nb:
 *  get:
 *      description: Used to get the numbers of offices
 *      tags:
 *          - offices
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post('/', officeCtrl.newOffice);
/**
 * @swagger
 * /api/offices:
 *   post:
 *      description: Used to add a new office
 *      tags:
 *          - offices
 *      parameters:
 *          - in: body
 *            name: customers
 *            schema:
 *              type: object
 *              required:
 *                 - officeCode
 *                 - city
 *                 - phone
 *                 - addressLine1
 *                 - addressLine1
 *                 - state
 *                 - country
 *                 - postalCode
 *                 - territory
 *              properties:
 *                  officeCode:
 *                      type: integer
 *                      example: 100
 *                      required: true
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
 *                  territory:
 *                      type: string
 *                      minlenth: 1
 *                      maxLength: 50
 *                      required: false
 *                      example: NA
 *      responses:
 *          '201':
 *              description: Resource created successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put('/', officeCtrl.updateOffice);
router.delete('/:id', officeCtrl.deleteOffice)

module.exports = router;