const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require("path");
const request = require('request');

const express = require('express');
const app = express();
const basePath = 'src/services/' 
const download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};
// replace the value below with the Telegram token you receive from @BotFather
const token = '1668206864:AAF9eNO_pkiVyNXU722S42bpJufO0BJM5LQ';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});
/*
// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  //bot.sendMessage(chatId, 'Hola'+ chatId);
  bot.sendMessage(1571873545, 'TIMBREEEEE')  
  console.log("mensaje")
  download("http://192.168.100.88/640x480.jpg", "foto.jpg", function(){
    console.log(`image download!!`);
    bot.sendPhoto(chatId, "./foto.jpg")
	})
})
  */




const suscribersFile = path.resolve(basePath + "suscribers.json")
bot.onText(/suscribime/, (msg, match) => {
  let suscribers = fs.readFileSync(suscribersFile);
  suscribers = JSON.parse(suscribers);
  chatToFind = suscribers.filter(chat => chat.chatId == msg.chat.id)
  if (chatToFind.length > 0){
    const resp = msg.chat.first_name + " ya estás suscripto"; // the captured "whatever"
    // send back the matched "whatever" to the chat
    bot.sendMessage(chat.chatId, resp);
  }

  const chat = {
    name: msg.chat.first_name,
    chatId: msg.chat.id
  }
  suscribers.push(chat)
  fs.writeFileSync(suscribersFile, 
                 JSON.stringify(suscribers));
  const resp = chat.name + " estás suscripto"; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chat.chatId, resp);
});

bot.onText(/salir/, (msg, match) => {
  let suscribers = fs.readFileSync(suscribersFile);
  suscribers = JSON.parse(suscribers);
  suscribers = suscribers.filter(chat => chat.chatId != msg.chat.id)

  fs.writeFileSync(suscribersFile, 
                 JSON.stringify(suscribers));
  const resp = msg.chat.first_name + " ya no estás en la lista"; 

  bot.sendMessage(msg.chat.id, resp);
});


bot.onText(/foto/, (msg, match) => {
	download("http://192.168.100.88/640x480.jpg", fotoPath, function(){
                                console.log(`image download!!`);
                                bot.sendPhoto(msg.chat.id, fotoPath)
        })
});


const fotoPath = path.resolve(basePath + "foto.jpg")
const  ring = async ()=> {
	console.log("entro al ring")
	let suscribers = fs.readFileSync(suscribersFile);
	suscribers = JSON.parse(suscribers);
	if(suscribers.length >0) {
		suscribers.forEach(chat => {
			console.log("intento mandar al chat")
			bot.sendMessage(chat.chatId, 'TIMBREEEEEE')
  			download("http://192.168.100.88/640x480.jpg", fotoPath, function(){
    				console.log(`image download!!`);
    				bot.sendPhoto(chat.chatId, fotoPath)
			})
		})
	}

}

module.exports = { ring }

