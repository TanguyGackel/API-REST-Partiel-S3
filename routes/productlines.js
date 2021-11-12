const express = require('express');

const router = express.Router();

const productLinesCtrl = require('../controllers/productLines');

router.get('/', productLinesCtrl.allProductLines);
/**
 * @swagger
 * /api/productlines:
 *  get:
 *      description: Used to get all product lines
 *      tags:
 *          - product lines
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
module.exports = router;