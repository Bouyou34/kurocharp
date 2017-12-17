const Command = require("../../core/command");

class role extends Command {
    constructor(client) {
        super(client, {
            name: "role",
            description: "Give the user a role in the <#391873430229745664> channel."
        });
    }

    async run(message, channel, user, args) {
        if (message.channel.id !== "391873430229745664") {
            msg.delete();
            return;
        }
        const roles = args;
        console.log(args)
        var SAroles = ['red', 'green', 'yellow', 'blue', 'pink', 'purple', 'orange']
        if (SAroles.indexOf(roles.toLowerCase()) > -1) {
            message.guild.roles.forEach(role => {
                if (role.name == roles.toLowerCase()) {
                    message.member.addRole(role).catch(console.error);
                    return;
                }                
            });
        }
    }
};
module.exports = roleCommand;