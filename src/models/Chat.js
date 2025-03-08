const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    user1: { type: Number, required: true },
    user2: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Chat', ChatSchema);
