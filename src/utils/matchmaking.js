const Chat = require('../models/Chat');
const User = require('../models/User');

const waitingUsers = new Set();

async function matchUser(userId, ctx) {
    if (waitingUsers.has(userId)) {
        return ctx.reply("⏳ You are already searching for a chat...");
    }

    const otherUser = [...waitingUsers].find(id => id !== userId);
    
    if (otherUser) {
        // Start chat
        waitingUsers.delete(otherUser);
        ctx.reply("✅ Found a chat! Say hi! 👋");
        ctx.telegram.sendMessage(otherUser, "✅ You are now connected! Start chatting!");
        
        await Chat.create({ user1: userId, user2: otherUser });
    } else {
        waitingUsers.add(userId);
        ctx.reply("🔍 Searching for a partner... Please wait.");
    }
}

async function endChat(userId, ctx) {
    const chat = await Chat.findOneAndDelete({ $or: [{ user1: userId }, { user2: userId }] });

    if (chat) {
        const partnerId = chat.user1 === userId ? chat.user2 : chat.user1;
        ctx.reply("❌ Chat ended.");
        ctx.telegram.sendMessage(partnerId, "❌ Your partner has left the chat.");
    } else {
        ctx.reply("❗ You are not in a chat.");
    }
}

async function findNewChat(userId, ctx) {
    await endChat(userId, ctx);
    await matchUser(userId, ctx);
}

async function leaveChat(userId, ctx) {
    await endChat(userId, ctx);
}

module.exports = { matchUser, endChat, findNewChat, leaveChat };
