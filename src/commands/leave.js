const { leaveChat } = require('../utils/matchmaking');

module.exports.handleLeave = async (ctx) => {
    const userId = ctx.from.id;
    await leaveChat(userId, ctx);
};
