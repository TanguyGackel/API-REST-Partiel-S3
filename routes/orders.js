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

module.exports= router;