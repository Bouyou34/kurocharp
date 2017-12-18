const Command = require("../../core/command");
const toLower = require("../../core/util/util");

class roleCommand extends Command {
    constructor(client) {
        super(client, {
            name: "role",
            description: "Give the user a role.",
            aliases: ["roles"]
        });
    }

    async run(message, channel, user, args) {
        if (message.channel.id !== "392046551179984896") {
            console.log(`${message.author.username} tried to run role command in ${channel.name} but failed.`);
            message.delete();
            console.log(args);
            return;
        }
        var SAroles = ['red', 'green', 'yellow', 'blue', 'pink', 'purple', 'orange', 'male', 'female', 'trans'];
        const roles = args;
        console.log(roles, `${message.author.username} ran role command in ${channel.name} to get role`, roles)
        message.delete(`${message.author.username} ran role command in ${channel.name}`);
        message.member.addRole(message.guild.roles.find("name", roles[0]))
    }
}
module.exports = roleCommand;