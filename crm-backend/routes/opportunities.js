const express = require('express');
const router = express.Router();
const opportunityController = require('../controllers/opportunityController');

router.post('/', opportunityController.createOpportunity);
// Otras rutas: obtener, actualizar, eliminar oportunidades...

module.exports = router;
