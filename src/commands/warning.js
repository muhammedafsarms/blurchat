const { bot } = require("../bot");
const { isAdmin } = require("../utils/adminUtils");
const User = require("../models/User");

bot.command("warning", async (ctx) => {
    const adminId = ctx.from.id;
    
    if (!isAdmin(adminId)) {
        return ctx.reply("❌ You are not an admin.");
    }

    const args = ctx.message.text.split(" ");
    if (args.length < 3) {
        return ctx.reply("⚠️ Usage: /warning <user_id> <reason>");
    }

    const userId = args[1];
    const reason = args.slice(2).join(" ");

    try {
        let user = await User.findOne({ telegramId: userId });

        if (!user) {
            return ctx.reply("❌ User not found.");
        }

        user.warnings = (user.warnings || 0) + 1;
        await user.save();

        ctx.telegram.sendMessage(userId, `⚠️ You have received a warning from an admin:\n"${reason}"`);

        return ctx.reply(`✅ Warning sent to ${userId}. They now have ${user.warnings} warnings.`);
    } catch (err) {
        console.error("Error issuing warning:", err);
        return ctx.reply("❌ Failed to issue warning.");
    }
});

module.exports = bot;
