const Command = require("../../core/command");

class croleCommand extends Command {
    constructor(client) {
        super(client, {
            name: "clear",
            aliases: ["clearrole", "clearole", "crole", "clear"],
            description: 'Remove a color role to the user',
        });
    }
    async run(message, channel, user, args) {
        if (message.channel.id !== "392046551179984896") {
            console.log(`${message.author.username} tried to run crole command in ${channel.name} but failed.`);
            message.delete();
            console.log(args);
            return;
        }

        var clearlist = new clearlist['red', 'green', 'yellow', 'blue', 'pink', 'purple', 'orange', 'Gamer', 'Role Play', 'Not Looking', 'Taken', 'Single', 'Male', 'Female', 'Trans', 'Bisexual', 'Straight', '15-17', '10-14'];
        const clears = args;
        console.log(clears, `${message.author.username} ran crole command in ${channel.name} to clear role`, clears)
        message.delete(`${message.author.username} ran crole command in ${channel.name}`);
        message.member.removeRole(message.guild.roles.find("name", clears[0].toLowerCase()))
    }
}
module.exports = croleCommand;