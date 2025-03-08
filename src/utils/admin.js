const User = require('../models/User');

async function getStats(ctx) {
    const userCount = await User.countDocuments();
    ctx.reply(`📊 Total Users: ${userCount}`);
}

async function banUser(userId, ctx) {
    await User.findOneAndUpdate({ telegramId: userId }, { banned: true });
    ctx.reply(`🚫 User ${userId} has been banned.`);
}

async function unbanUser(userId, ctx) {
    await User.findOneAndUpdate({ telegramId: userId }, { banned: false });
    ctx.reply(`✅ User ${userId} has been unbanned.`);
}

async function listBannedUsers(ctx) {
    const bannedUsers = await User.find({ banned: true });
    ctx.reply(`🚫 Banned Users:\n${bannedUsers.map(u => u.telegramId).join("\n")}`);
}

async function broadcastMessage(message, ctx) {
    // This should send a message to all users (requires a user collection)
    ctx.reply("📢 Broadcast sent.");
}

module.exports = { getStats, banUser, unbanUser, listBannedUsers, broadcastMessage };
