require('dotenv').config();
const { Telegraf } = require('telegraf');
const mongoose = require('mongoose');
const { handleStart } = require('./commands/start');
const { handleFind } = require('./commands/find');
const { handleStop } = require('./commands/stop');
const { handleNext } = require('./commands/next');
const { handleLeave } = require('./commands/leave');
const { handleReport } = require('./commands/report');
const { handleAdmin } = require('./commands/admin');
const { handleWarning } = require("./commands/warning");

const config = require('./config/config');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Connect to MongoDB
require('dotenv').config(); // ✅ Load .env variables
console.log("🔹 MONGO_URI:", process.env.MONGO_URI); // Debugging log


const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
    console.error("❌ MongoDB connection error: MONGO_URI is not set in .env file!");
    process.exit(1); // Stop execution if MongoDB is not configured
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("✅ Connected to MongoDB");
}).catch((err) => {
    console.error("❌ MongoDB connection error:", err);
});


// Command Handlers
bot.start((ctx) => handleStart(ctx));
bot.command('find', (ctx) => handleFind(ctx));
bot.command('stop', (ctx) => handleStop(ctx));
bot.command('next', (ctx) => handleNext(ctx));
bot.command('leave', (ctx) => handleLeave(ctx));
bot.command('report', (ctx) => handleReport(ctx));
bot.command('admin', (ctx) => handleAdmin(ctx));

// Start bot
bot.launch().then(() => console.log('🤖 BlurChat Bot is running...'));

// Keep Alive for UptimeRobot
const keepAlive = require('./uptime/keep_alive');

keepAlive(); // ✅ Now this function works correctly!


// Graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
