const sensorController = {
    receberDados: async (req, res) => {
        const { sensorId, temperatura } = req.body;
        console.log(`Dados do sensor ${sensorId}: ${temperatura}°C`);
        res.status(201).json({ message: "Dados recebidos!" });
    },
    // Esta é a função que estava faltando!
    buscarDados: (req, res) => {
        res.json({ sensorId: "Sensor01", temperatura: 25.5 });
    }
};

module.exports = sensorController;