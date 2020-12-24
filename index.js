const Discord = require('discord.js');
const bot = new Discord.Client();


bot.login(process.env.token);


bot.on("message", (message) => {
    if (message.content == "!andre") {
        message.channel.send("BASTA ANDARE A CACCIA DI BAMBINE!!!")
    }
    if (message.content == "!simo") {
        message.channel.send("AH SI,E' QUELLO CHE SI INVENTA MILLE SCUSE")
    }
    if (message.content == "!macchina") {
        message.channel.send("NON FATEMI GUIDARE DA SIMO SENNO POI DEVO METTERE IL GESSO ALLA FRIZIONE")
    }
    if (message.content == "!monster") {
        message.channel.send("VI PREGO...METTETEMI APPOSTO")
    }
    if (message.content == "!scooter") {
        message.channel.send("L'MT ERA PIU' BELLA... :fist:")
    }
    if (message.content == "!pie") {
        message.channel.send("TI VA UN PO' DI SCHWEPPES...SOLO IO E TE? :smirk:")
    }

});