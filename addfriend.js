exports.run = (client, message, Discord, Prefix, db) => {
    var mentioned = message.mentions.members.first();
    var friends = [];
    db.fetch(`${message.author.id}.friendlist`).then(i => {


        if(!mentioned)return message.channel.send("Please mention a valid user to add as your friend");
        var user = mentioned.user;

        if(i !== undefined && i !== null)friends = JSON.parse(i);

        if(friends.indexOf(user.id) !== -1)return message.channel.send("You have allready added this person as friend");

        friends.push(user.id)

        db.set(`${message.author.id}.friendlist`, JSON.stringify(friends));
        message.channel.send(`You have succesfully added ${user.tag} to your friend list.`)
    });

    exports.config = {
        name: "",
        description: "",
        usage: ">addfriend",
        accessableby: "owner",
        aliases: ["addfriend"]
    }

}
