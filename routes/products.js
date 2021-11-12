const express = require('express');

const router = express.Router();

const productsCtrl = require('../controllers/products');

router.get('/orders/:id', productsCtrl.productsByOrder);//TODO swagger
router.post('/', productsCtrl.NewProduct);//TODO ne s'affche plus jsp pk
/**
 * @swagger
 * /api/customers:
 *   post:
 *      description: Used to add a customer
 *      tags:
 *          - customers
 *      parameters:
 *          - in: body
 *            name: customers
 *            schema:
 *              type: object
 *              required:
 *                 - productCode
 *                 - productName
 *                 - productLine
 *                 - productScale
 *                 - productVendor
 *                 - productDescription
 *                 - quantityInStock
 *                 - buyPrice
 *                 - MSRP
 *              properties:
 *                  productCode:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: S50_1392
 *                      required: true
 *                  productName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Machin TRUC
 *                      required: true
 *                  productLine:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Ship
 *                      required: true
 *                  productScale:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      required: true
 *                      example: 1:900
 *                  productVendor:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      required: true
 *                      example: Studio M Art Models
 *                  productDescription:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 256
 *                      required: true
 *                      example: MACHIN woaw AMAZing
 *                  quantityInStock:
 *                      type: integer
 *                      required: true
 *                      example: 1500
 *                  buyPrice:
 *                      type: integer
 *                      required: true
 *                      example: 15
 *                  MSRP:
 *                      type: integer
 *                      required: true
 *                      example: 16
 *      responses:
 *          '201':
 *              description: Resource created successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.delete('/:id', productsCtrl.deleteProduct);//TODO swagger
router.put('/', productsCtrl.updateProduct);
/**
 * @swagger
 * /api/products:
 *   put:
 *      description: Used to update a product
 *      tags:
 *          - products
 *      parameters:
 *          - in: body
 *            name: products
 *            schema:
 *              type: object
 *              required:
 *                 - productCode
 *                 - productName
 *                 - productLine
 *                 - productScale
 *                 - productVendor
 *                 - productDescription
 *                 - quantityInStock
 *                 - buyPrice
 *                 - MSRP
 *              properties:
 *                  productCode:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: S50_1392
 *                      required: true
 *                  productName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Machin TRUC
 *                      required: true
 *                  productLine:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Trucks and Buses
 *                      required: true
 *                  productScale:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      required: true
 *                      example: 1:900
 *                  productVendor:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      required: true
 *                      example: Studio M Art Models
 *                  productDescription:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 256
 *                      required: true
 *                      example: MACHIN woaw AMAZing
 *                  quantityInStock:
 *                      type: integer
 *                      required: true
 *                      example: 1500
 *                  buyPrice:
 *                      type: integer
 *                      required: true
 *                      example: 15
 *                  MSRP:
 *                      type: integer
 *                      required: true
 *                      example: 16
 *      responses:
 *          '200':
 *              description: Resource created successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/mostorder', productsCtrl.MostOrderProducts)
/**
 * @swagger
 * /api/products/mostorder:
 *  get:
 *      description: Used to get the 3 products the most ordered
 *      tags:
 *          - products
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/mostorderexpensive', productsCtrl.MostOrderExpensiveProducts)
/**
 * @swagger
 * /api/products/mostorderexpensive:
 *  get:
 *      description: Used to get the 3 products the more ordered and expensive
 *      tags:
 *          - products
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post('/byyearbutnotanotheryear', productsCtrl.productByYearButNotAnotherYear);//TODO swagger

module.exports = router;