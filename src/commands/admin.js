const { getStats, banUser, unbanUser, listBannedUsers, broadcastMessage } = require('../utils/admin');

module.exports.handleAdmin = async (ctx) => {
    const args = ctx.message.text.split(" ");
    const command = args[1];
    
    if (!command) {
        return ctx.reply("⚙️ Admin Commands:\n" +
                         "/stats - View bot stats\n" +
                         "/ban <user_id> - Ban a user\n" +
                         "/unban <user_id> - Unban a user\n" +
                         "/list_banned - List banned users\n" +
                         "/broadcast <message> - Send message to all users");
    }
    
    switch (command) {
        case "stats":
            return getStats(ctx);
        case "ban":
            if (args.length < 3) return ctx.reply("❗ Usage: /ban <user_id>");
            return banUser(args[2], ctx);
        case "unban":
            if (args.length < 3) return ctx.reply("❗ Usage: /unban <user_id>");
            return unbanUser(args[2], ctx);
        case "list_banned":
            return listBannedUsers(ctx);
        case "broadcast":
            if (args.length < 3) return ctx.reply("❗ Usage: /broadcast <message>");
            return broadcastMessage(args.slice(2).join(" "), ctx);
        default:
            return ctx.reply("❌ Unknown command.");
    }
};
