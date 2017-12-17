const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//Initialiser le core
const discord = require('discord.js');
const { error } = require("./core/util/util");
const config = require("./config.js");
const logger = require("./core/util/logger");

//Initialiser le Discord bot de base
const client = new discord.Client();
const moment = require('moment');


client.on('ready', () => {
    logger.success(`
        Bot ready. Currently in:
        ${client.channels.size} Channels,
        ${client.guilds.size} Servers,
        With a ${client.users.size} total user.
        `);
  client.user.setGame('IM A MORON!');
});

const prefix = ">";
client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    if (message.content.startsWith(prefix + "ping")) {
      message.channel.send(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
    }
});

client.login(process.env.TOKEN);