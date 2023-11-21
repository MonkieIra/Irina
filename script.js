const TelegramBot = require('node-telegram-bot-api');


const token = '6462299495:AAGQyRMN2sbXaGRSXz1ipL8xKyXEUIKV-gg';


const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;


  bot.sendMessage(chatId, msg.text);
});