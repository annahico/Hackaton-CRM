const Collaborator = require('../models/collaborator');
const sendEmail = require('../config/emailService');

exports.createCollaborator = async (req, res) => {
    try {
        const collaborator = new Collaborator(req.body);
        await collaborator.save();
        res.status(201).json(collaborator);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Otras funciones: obtener, actualizar, eliminar colaboradores...
