
const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {

    if (args[0] == "help") return message.channel.send(`Just do ${prefix}help instead.`)

    if (args[0]) {
        let command = args[0];
        if (bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new Discord.RichEmbed()
                .setColor(colours.cyan)
                .setAuthor(`Coding•JS Help`, message.guild.iconURL)
                .setThumbnail(bot.user.displayAvatarURL)
                .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n**Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
            message.channel.send(SHembed);
        }
    }

    if (!args[0]) {
        message.delete();
        let embed = new Discord.RichEmbed()
            .setAuthor(`Coding•JS Bot Help Commands has been sent to your DM!`, message.guild.iconURL)
            .setColor(colours.redlight)
            .setDescription(`${message.author.username} check your dms!`)

        let Sembed = new Discord.RichEmbed()
            .setColor(colours.cyan)
            .setAuthor('Coding•JS Server Commands', message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL)
            .setTimestamp()
            .setDescription(`These are the avaliable commands for the 2wild4u Nєхt Gєnєrαtíσnᴵⁿᶜ• Bot\nThe bot prefix is: ${prefix}`)
            .addField('***Fun Commands:***', "|``ascii`` | ``8ball`` | ``calc`` | ``quiz`` | ``slots`` | ``joke`` | ``ping`` | ``report`` | ``serverinfo or si`` | ``userinfo or ui`` | ``invite`` |\n \n ***Moderation Commands***\n \n``addrole`` | ``contact`` | ``ban`` | ``kick`` | ``mute`` | ``purge`` | ``removerole`` | ``say`` | ``softban`` | ``unban`` | ``unmute``| ``poll`` |\n \n ***Contact/Support Commands***\n \n| ``contact/support`` |\n \n ***Bot invite Commands***\n \n|``invite`` |")
            .setFooter('Coding•JS', 'https://cdn.discordapp.com/attachments/578839142323060738/586419595938627596/JPEG_20190606_190507.jpg');
        message.channel.send(embed).then(m => m.delete(10000));
        message.author.send(Sembed)
    }
}


module.exports.config = {
    name: "help",
    aliases: ["h", "help", "commands"],
    usage: "--help",
    description: "",
    accessableby: "Members"
}