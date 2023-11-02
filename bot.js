const TelegramBot = require("node-telegram-bot-api")

const translate = require('translate-google')

const token = '6782858364:AAEFMaZ9i9dUlTCyx3ypyj4wNtQjvu3jE-E'
const bot = new TelegramBot(token, { polling: true })

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text

    if (messageText === '/start' ) {
        bot.sendMessage(chatId, 'Hola! Escribe un texto en español y te lo traduciré')
        console.log(messageText.toString());
    }else{
        translate(messageText, {from: 'es', to: 'en'}).then(res =>{
            bot.sendMessage(chatId, res)
            console.log(messageText);
        }).catch(e => {
            console.log(e);
        })
    }
})