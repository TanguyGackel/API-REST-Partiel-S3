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
router.post('/', ordersCtrl.createOrderForCustomerWithListOfOrderDetails);//TODO finir swagger et réparer
/**
 * @swagger
 * /api/orders:
 *   post:
 *      description: Used to add a new order with a list of order details
 *      tags:
 *          - orders
 *      parameters:
 *          - in: body
 *            name: Order
 *            schema:
 *              type: object
 *              required:
 *                 - orderNumber
 *                 - orderDate
 *                 - requiredDate
 *                 - status
 *                 - customerNumber
 *                 - productCode
 *                 - priceEach
 *                 - orderLineNumber
 *              properties:
 *                  orderNumber:
 *                      type: integer
 *                      example: 10604
 *                      required: true
 *                  orderDate:
 *                      type: string
 *                      example: 2008/01/01
 *                      required: true
 *                  requiredDate:
 *                      type: string
 *                      example: 2008/02/02
 *                      required: true
 *                  status:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      required: true
 *                      example: Not Shipped
 *                  customerNumber:
 *                      type: integer
 *                      required: true
 *                      example: 100
 *                  productCode:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      required: true
 *                      example: S50_4713
 *                  priceEach:
 *                      type: integer
 *                      required: true
 *                      example: 150
 *                  orderLineNumber:
 *                      type: integer
 *                      required: true
 *                      example: 1
 *      responses:
 *          '201':
 *              description: Resource created successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
module.exports= router;