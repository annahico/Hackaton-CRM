const mongoose = require('mongoose');

const CollaboratorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    company: { type: String, required: true },
});

module.exports = mongoose.model('Collaborator', CollaboratorSchema);
