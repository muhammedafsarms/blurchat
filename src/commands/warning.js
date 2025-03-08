const { isAdmin } = require('../utils/admin'); // Fix import path
const { Telegraf } = require('telegraf');

module.exports = async (ctx) => {
    const userId = ctx.from.id;
    if (!isAdmin(userId)) {
        return ctx.reply("🚫 You are not authorized to use this command.");
    }

    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 2) {
        return ctx.reply("⚠️ Usage: /warning <user_id> <reason>");
    }

    const [warnedUserId, ...reasonParts] = args;
    const reason = reasonParts.join(" ");

    ctx.reply(`⚠️ User ${warnedUserId} has been warned.\nReason: ${reason}`);
};
