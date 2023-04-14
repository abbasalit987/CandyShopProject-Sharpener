const path = require('path');

const express = require('express');

const adminController = require('../controller/admin');

const router = express.Router();

router.post('/stockinfo', adminController.addItem);

router.get('/stockinfo', adminController.getItems);

router.put('/stockinfo/:id', adminController.putItem);

module.exports = router;
