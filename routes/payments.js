const express = require('express');

const router = express.Router();

const paymentsCtrl = require('../controllers/payments');

router.get('/month/:annee', paymentsCtrl.monthHighestPayments);
/**
 * @swagger
 * /api/payments/month/{annee}:
 *  get:
 *      description: Used to get month with highest payments of a year
 *      tags:
 *          - payments
 *      parameters:
 *          - in : path
 *            name: annee
 *            type: string
 *            description: annee id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/:date', paymentsCtrl.paymentsByDate);
/**
 * @swagger
 * /api/payments/{date}:
 *  get:
 *      description: Used to get amount of payments of a date
 *      tags:
 *          - payments
 *      parameters:
 *          - in : path
 *            name: date
 *            type: string
 *            description: date id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/:premdate/:secdate', paymentsCtrl.paymentsBetweenTwoDates);
/**
 * @swagger
 * /api/payments/{premdate}/{secdate}:
 *  get:
 *      description: Used to get amount of payments between two dates
 *      tags:
 *          - payments
 *      parameters:
 *          - in : path
 *            name: premdate
 *            type: string
 *            description: premdate id
 *            required: true
 *          - in : path
 *            name: secdate
 *            type: string
 *            description: secdate id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get('/:date/:premmois/:secmois', paymentsCtrl.paymentsBetweenTwoMonths);
/**
 * @swagger
 * /api/payments/{date}/{premmois}/{secmois}:
 *  get:
 *      description: Used to get amount on a year between two months
 *      tags:
 *          - payments
 *      parameters:
 *          - in : path
 *            name: date
 *            type: string
 *            description: date id
 *            required: true
 *          - in : path
 *            name: premmois
 *            type: string
 *            description: premmois id
 *            required: true
 *          - in : path
 *            name: secmois
 *            type: string
 *            description: secmois id
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