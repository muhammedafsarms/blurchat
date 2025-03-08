require('dotenv').config();

module.exports = {
    BOT_TOKEN: process.env.BOT_TOKEN,  // Telegram bot token
    MONGO_URI: process.env.MONGO_URI,  // MongoDB connection string
    ADMIN_IDS: process.env.ADMIN_IDS ? process.env.ADMIN_IDS.split(',').map(id => parseInt(id)) : [], // Admin IDs
    PORT: process.env.PORT || 3000, // Default port for the keep-alive server
};
