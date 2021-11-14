const express = require('express');

const router = express.Router();

const orderDetailsCtrl = require('../controllers/orderdetails');

router.post('/', orderDetailsCtrl.addProductToOrder);
/**
 * @swagger
 * /api/orderdetails:
 *   post:
 *      description: Used to add a new order details
 *      tags:
 *          - order details
 *      parameters:
 *          - in: body
 *            name: order details
 *            schema:
 *              type: object
 *              required:
 *                 - orderNumber
 *                 - productCode
 *                 - quantityOrdered
 *                 - priceEach
 *                 - orderLineNumber
 *              properties:
 *                  orderNumber:
 *                      type: integer
 *                      example: 10404
 *                      required: true
 *                  productCode:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: S50_1392
 *                      required: true
 *                  quantityOrdered:
 *                      type: integer
 *                      example: 50
 *                      required: true
 *                  priceEach:
 *                      type: integer
 *                      required: true
 *                      example: 10
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
router.delete('/', orderDetailsCtrl.deleteProductToOrder);
/**
 * @swagger
 * /api/orderdetails/{id}:
 *  delete:
 *      description: Used to delete an orderdetails by id
 *      tags:
 *          - order details
 *      parameters:
 *          - in : path
 *            name: id
 *            type: integer
 *            description: order id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.put('/', orderDetailsCtrl.updateProductToOrder);
/**
 * @swagger
 * /api/orderdetails:
 *   put:
 *      description: Used to update an order details
 *      tags:
 *          - order details
 *      parameters:
 *          - in: body
 *            name: orderdetails
 *            schema:
 *              type: object
 *              required:
 *                 - orderNumber
 *                 - productCode
 *                 - quantityOrdered
 *              properties:
 *                  orderNumber:
 *                      type: integer
 *                      example: 10404
 *                      required: true
 *                  productCode:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: S50_1392
 *                      required: true
 *                  quantityOrdered:
 *                      type: integer
 *                      example: 60
 *                      required: true
 *      responses:
 *          '200':
 *              description: Resource created successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;