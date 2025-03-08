const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    telegramId: { type: Number, required: true, unique: true },
    banned: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', UserSchema);
