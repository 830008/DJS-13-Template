module.exports = {
    createCommand: function(commands: any, DiscordJS: any){
        commands.create({
            name: 'kick',
            description: 'Kicks a user.',
            options: [
                {
                    name: 'user',
                    description: 'The user you want to kick.',
                    type: DiscordJS.Constants.ApplicationCommandOptionTypes.USER,
                    required: true
                }
            ]
        })
    },
    runCommand: function(options: any, interaction: any, db: any,){
        let user = options.getUser('user')
       let member = interaction.guild.members.cache.get(user.id)
       member.kick()
       interaction.reply({
           content: "Successfully kicked: <@"+user.id+">",
           ephmeral: true
       })
    }
}