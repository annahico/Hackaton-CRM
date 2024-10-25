const express = require('express');
const router = express.Router();
const collaboratorController = require('../controllers/collaboratorController');

router.post('/', collaboratorController.createCollaborator);
// Otras rutas: obtener, actualizar, eliminar colaboradores...

module.exports = router;
