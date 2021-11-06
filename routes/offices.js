const express = require('express');

const router = express.Router();

const officeCtrl = require('../controllers/offices');

router.get('/', officeCtrl.allOffices);
router.get('/nb', officeCtrl.nbOffices);

module.exports = router;