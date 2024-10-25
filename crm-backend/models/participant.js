const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    ticketPurchased: { type: Boolean, default: false },
});

module.exports = mongoose.model('Participant', ParticipantSchema);
