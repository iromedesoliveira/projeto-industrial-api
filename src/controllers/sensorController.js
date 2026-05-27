exports.receberDados = async (req, res) => {
    const { sensorId, temperatura } = req.body;
    console.log(`Dados do sensor ${sensorId}: ${temperatura}°C`);
    res.status(201).json({ message: "Dados recebidos!" });
};