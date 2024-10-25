const Opportunity = require('../models/opportunity');

exports.createOpportunity = async (req, res) => {
    try {
        const opportunity = new Opportunity(req.body);
        await opportunity.save();
        res.status(201).json(opportunity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Otras funciones: obtener, actualizar, eliminar oportunidades...
