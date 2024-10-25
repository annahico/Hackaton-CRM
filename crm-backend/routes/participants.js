const express = require('express');
const router = express.Router();
const participantController = require('../controllers/participantController');

router.post('/', participantController.createParticipant);
// Otras rutas: obtener, actualizar, eliminar participantes...

module.exports = router;
