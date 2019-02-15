const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //
    const categoryId = "546039814227492866";

    //
    if (message.channel.parentID == categoryId) {

        message.channel.delete();

    } else {

        message.channel.send("Please do this command in a ticket channel.");

    }

    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Anfrage, " + message.channel.name)
        .setDescription("Deine Anfrage wird nun / oder wurde bearbeitet")
        .setFooter("Anfrage Geschlossen");

    //
    var logChannel = message.guild.channels.find("name", "gruppeneinteilung");
    if (!logChannel) return message.channel.send("Channel does not exist");

    logChannel.send(embedCloseTicket);

}

module.exports.help = {
    name: "close"
}
