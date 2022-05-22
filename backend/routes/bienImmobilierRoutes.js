const express = require('express');
const router = express.Router();

const bienImmobilierCtrl = require('../controllers/bienImmobilierControllers');

router.get('/', bienImmobilierCtrl.getAllBienImmobilier);

module.exports = router;