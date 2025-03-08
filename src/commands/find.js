const { matchUser } = require('../utils/matchmaking');

module.exports.handleFind = async (ctx) => {
    const userId = ctx.from.id;
    await matchUser(userId, ctx);
};
