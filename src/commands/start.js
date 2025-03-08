module.exports.handleStart = (ctx) => {
    ctx.reply(
        "👋 Welcome to BlurChat!\n\n" +
        "🔹 Use /find to start chatting\n" +
        "🔹 Use /stop to end a chat\n" +
        "🔹 Use /report to report a user\n\n" +
        "Enjoy anonymous chatting! 🚀"
    );
};
