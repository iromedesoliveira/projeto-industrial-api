const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');
router.post('/dados', sensorController.receberDados);
module.exports = router;