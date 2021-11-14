const express = require('express');

const router = express.Router();

const productsCtrl = require('../controllers/products');

router.get('/orders/:id', productsCtrl.productsByOrder);
/**
 * @swagger
 * /api/products/orders/{id}:
 *  get:
 *      description: Used to get products of an order by id
 *      tags:
 *          - products
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
router.post('/', productsCtrl.NewProduct);
/**
 * @swagger
 * /api/products:
 *   post:
 *      description: Used to add a new products
 *      tags:
 *          - products
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
 *                      example: S77_7777
 *                      required: true
 *                  productName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: Machin
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
 *                      example: 1:200
 *                  productVendor:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      required: true
 *                      example: Unimax Art Galleries
 *                  productDescription:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 256
 *                      required: false
 *                      example: mahcin truc
 *                  quantityInStock:
 *                      type: integer
 *                      required: true
 *                      example: 150
 *                  buyPrice:
 *                      type: integer
 *                      required: true
 *                      example: 140
 *                  MSRP:
 *                      type: integer
 *                      required: true
 *                      example: 130
 *      responses:
 *          '201':
 *              description: Resource created successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.delete('/:id', productsCtrl.deleteProduct);
/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *      description: Used to delete a product by id
 *      tags:
 *          - products
 *      parameters:
 *          - in : path
 *            name: id
 *            type: string
 *            description: product id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
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
router.post('/byyearbutnotanotheryear', productsCtrl.productByYearButNotAnotherYear);
/**
 * @swagger
 * /api/products/byyearbutnotanotheryear:
 *   post:
 *      description: Used to get products sell a year but not the others years
 *      tags:
 *          - products
 *      parameters:
 *          - in: body
 *            name: products
 *            schema:
 *              type: object
 *              required:
 *                 - bonneannee
 *                 - mauvaiseannee
 *              properties:
 *                  bonneannee:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: 2006
 *                      required: true
 *                  mauvaiseannee:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 50
 *                      example: 2003
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