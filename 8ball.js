const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

    let question = message.content.split(/\s+/g).slice(1).join(" ");

    if (!question) {
        return message.channel.send('You must provide a question! **Usage: _8ball <question>**');

    }

    var answer = ['It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Calm Down Bro we got u',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it',
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful'];
    const ballEmbed = new Discord.RichEmbed()
        .setAuthor(question)
        .setDescription(answer[Math.round(Math.random() * (answer.length - 1))] + '.')
        .setColor(0x646770)
        .setThumbnail('https://pa1.narvii.com/6700/c22a891244cb6e067571287e08b185c6d83c8609_hq.gif')
        .setFooter("8Ball Reply")
    message.channel.send(ballEmbed);
}
module.exports.config = {
    name: "8ball",
    description: "Ask your question from Magic 8 ball",
    usage: "_8ball",
    accessableby: "Members",
    aliases: ["8ball", "magicball"]
}