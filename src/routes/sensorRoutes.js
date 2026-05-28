const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');

router.post('/dados', sensorController.receberDados);
router.get('/dados', sensorController.buscarDados);

module.exports = router;