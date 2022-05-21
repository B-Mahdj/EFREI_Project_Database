const express = require('express');
const router = express.Router();

const transactionCtrl = require('../controllers/transactionControllers');

router.get('/', transactionCtrl.getAllTransaction);

module.exports = router;