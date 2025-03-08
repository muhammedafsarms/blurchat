const Report = require('../models/Report');

async function reportUser(userId, reason, ctx) {
    await Report.create({ reporterId: userId, reason });
    ctx.reply("📩 Report submitted. We will review the issue.");
}

module.exports = { reportUser };
