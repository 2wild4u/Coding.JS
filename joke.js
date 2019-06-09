const discord = require ("discord.js");

exports.run = async (bot, msg, args) => {

	 let sa = require ("superagent");

    let {body} = await sa
    .get(`https://icanhazdadjoke.com/slack`);

    let o = new discord.RichEmbed()
        .setColor(0xFFFFFF)
        .setDescription("**" + body.attachments.map(a => a.text) + "**")
    msg.channel.send(o)
	
}
module.exports.config = {
    name: "joke",
    description: "",
    usage: "--joke",
    accessableby: "Members",
    aliases: ["joke", "meme"]
}