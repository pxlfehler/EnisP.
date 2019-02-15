const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // 
    const categoryId = "546039814227492866";

    //
    var userName = message.author.username;
    //
    var userDiscriminator = message.author.discriminator;

    //
    var bool = false;

    //
    message.guild.channels.forEach((channel) => {

        //
        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {

            message.channel.send("Du hast schon eine anfrage!");

            bool = true;

        }

    });

    //
    if (bool == true) return;

    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Anfrage, " + message.author.username)
        .setFooter("Anfrage Erstellt");

    message.channel.send(embedCreateTicket);

    //
    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => { //

        createdChan.setParent(categoryId).then((settedParent) => { //

            //
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            //
            settedParent.overwritePermissions(message.author, {

                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true

            });

            var embedParent = new discord.RichEmbed()
                .setTitle("Anfrage, " + message.author.username.toString())
                .setDescription("Bitte schreibe deinen wunsch hier dein wunsch wird bis 20:30 Bearbeitet.");

            settedParent.send(embedParent);

        }).catch(err => {
            message.channel.send("Error.");
        });

    }).catch(err => {
        message.channel.send("Error.");
    });

}

module.exports.help = {
    name: "gruppenwunsch"
}
