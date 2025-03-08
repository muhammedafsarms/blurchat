const { findNewChat } = require('../utils/matchmaking');

module.exports.handleNext = async (ctx) => {
    const userId = ctx.from.id;
    await findNewChat(userId, ctx);
};
