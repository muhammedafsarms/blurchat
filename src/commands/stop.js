const { endChat } = require('../utils/matchmaking');

module.exports.handleStop = async (ctx) => {
    const userId = ctx.from.id;
    await endChat(userId, ctx);
};
