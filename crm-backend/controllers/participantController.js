const Participant = require('../models/participant');

exports.createParticipant = async (req, res) => {
    try {
        const participant = new Participant(req.body);
        await participant.save();
        res.status(201).json(participant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Otras funciones: obtener, actualizar, eliminar participantes...
