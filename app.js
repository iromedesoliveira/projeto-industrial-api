const express = require('express');
const app = express();
const sensorRoutes = require('./src/routes/sensorRoutes');
app.use(express.json());
app.use('/api', sensorRoutes);
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));