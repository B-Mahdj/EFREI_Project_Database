const express = require('express');
const router = express.Router();

const personneCtrl = require('../controllers/personneControllers');

router.get('/', personneCtrl.getAllPersonne);

module.exports = router;