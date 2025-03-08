const { reportUser } = require('../utils/moderation');

module.exports.handleReport = async (ctx) => {
    const args = ctx.message.text.split(" ");
    if (args.length < 2) {
        return ctx.reply("❗ Usage: /report <reason>");
    }
    
    const userId = ctx.from.id;
    const reason = args.slice(1).join(" ");
    
    await reportUser(userId, reason, ctx);
};
