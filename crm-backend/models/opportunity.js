const mongoose = require('mongoose');

const OpportunitySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['open', 'in progress', 'closed'], default: 'open' },
    collaboratorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Collaborator' },
});

module.exports = mongoose.model('Opportunity', OpportunitySchema);
