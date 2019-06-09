const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {

    if (!args[0]) return message.channel.send('Proper Usage: <prefix>poll question');

    const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setFooter('React to vote.')
        .setDescription(args.join(' '))
        .setTitle(`Poll created by ${message.author.username}`);

    let msg = await message.channel.send(embed);

    await msg.react('✅');
    await msg.react('❌');
} 
module.exports.config = {
    name: "poll",
    aliases: ["poll", "vote"],
    usage: "--poll",
    description: "",
    accessableby: "Members"
}