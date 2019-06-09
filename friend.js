exports.run = (client, message, Discord, Prefix, db) => {
    var friends = [];
    var fetched;
    db.fetch(`${message.author.id}.friendlist`).then(async i => {
        if(i !== undefined && i !== null)friends = JSON.parse(i);

        if(friends === [])return message.channel.send("You need som friends before u can use this command. Add some friends by using this command " + prefix + "addfriend (friend).");

        var embed = new Discord.RichEmbed()
        .setDescription("```ruby" + "\nFriends Menu \n\nFriends: " + await listFriends(friends) + "```")
        return message.channel.send(embed);
    });

    async function listFriends(array){
        var result = [];
        await array.forEach(function(item){
            result.push(client.users.get(`${item}`).tag);
        });
        return result.join("\n");
    }

    exports.config = {
        name: "",
        description: "",
        usage: ">friend",
        accessableby: "owner",
        aliases: ["friend"]
    }

}