const express = require('express');
const router = express.Router();

const garageCtrl = require('../controllers/garageControllers');

router.get('/', garageCtrl.getAllGarage);

module.exports = router;