const express = require('express');
const router = express.Router();

const transactionCtrl = require('../controllers/transactionControllers');

router.get('/', transactionCtrl.getAllTransaction);
router.post('/', transactionCtrl.createTransaction);

module.exports = router;