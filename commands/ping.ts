module.exports = {
    createCommand: function(commands: any, DiscordJS: any){
        commands.create({
            name: 'ping',
            description: 'Replies with pong.'
            })
    },
    runCommand: function(options: any, interaction: any, db: any,) {
interaction.reply({
    content: "pong",
    ephemeral: true,
})
    }
}