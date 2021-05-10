const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");



bot.on("ready", async () =>{
    console.log("je suis ok");
    bot.user.setStatus("online")
    bot.user.setActivity(" ?help");
})


bot.on("message", message =>{
    if(message.content.startsWith("?qui suis je ?")){
        message.channel.send("je suis bill gates");
        message.delete();
    }
})



bot.login(config.token);