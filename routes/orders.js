const express = require('express');

const router = express.Router();

const ordersCtrl = require('../controllers/orders');

router.get('/customers/:id', ordersCtrl.lastOrdersByCustomerId);
/**
 * @swagger
 * /api/orders/customers/{id}:
 *  get:
 *      description: Used to get the last order of a customer by his id
 *      tags:
 *          - orders
 *      parameters:
 *          - in : path
 *            name: id
 *            type: integer
 *            description: customer id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post('/', ordersCtrl.createOrderForCustomerWithListOfOrderDetails);//Ne fonctionne plus alors qu'elle fonctionnait très bien avant :(
/**
 * @swagger
 * /api/orders:
 *   post:
 *      description: Used to add a new order with a list of order details
 *      tags:
 *          - orders
 *      parameters:
 *          - in: body
 *            name: customers
 *            schema:
 *              type: object
 *              required:
 *                 - customerNumber
 *                 - orderNumber
 *                 - orderDate
 *                 - requiredDate
 *                 - status
 *                 - nbOrderDetails
 *                 - productCode
 *                 - quantityOrdered
 *                 - priceEach
 *              properties:
 *                  customerNumber:
 *                      type: integer
 *                      example: 496
 *                      required: true
 *                  orderNumber:
 *                      type: integer
 *                      example: 25000
 *                      required: true
 *                  orderDate:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: 2009/06/06
 *                      required: true
 *                  requiredDate:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      required: true
 *                      example: 2009/07/07
 *                  status:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      required: true
 *                      example: Not Shipped
 *                  nbOrderDetails:
 *                      type: integer
 *                      required: true
 *                      example: 2
 *                  productCode:
 *                      type: array
 *                      items:
 *                          type: string
 *                          minLength: 1
 *                          maxLength: 50
 *                          required: true
 *                          example: S50_1341, S24_3816
 *                  quantityOrdered:
 *                      type: array
 *                      items:
 *                          type: integer
 *                          required: true
 *                          example: 150, 10
 *                  priceEach:
 *                      type: array
 *                      items:
 *                          type: integer
 *                          required: true
 *                          example: 10, 20
 *      responses:
 *          '201':
 *              description: Resource created successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
module.exports= router;