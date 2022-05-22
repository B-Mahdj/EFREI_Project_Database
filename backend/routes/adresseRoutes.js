const express = require('express');
const router = express.Router();

const adresseCtrl = require('../controllers/adresseControllers');

router.get('/', adresseCtrl.getAllAdresse);

module.exports = router;