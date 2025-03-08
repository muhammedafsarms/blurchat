const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    reporterId: { type: Number, required: true },
    reason: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Report', ReportSchema);
