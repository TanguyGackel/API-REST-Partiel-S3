const express = require('express');

const router = express.Router();

const officeCtrl = require('../controllers/offices');

router.get('/', officeCtrl.allOffices);
router.get('/nb', officeCtrl.nbOffices);
router.post('/', officeCtrl.newOffice);
router.put('/', officeCtrl.updateOffice);
router.delete('/:id', officeCtrl.deleteOffice)

module.exports = router;