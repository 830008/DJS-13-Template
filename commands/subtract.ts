module.exports = {
    createCommand: function(commands: any, DiscordJS: any){
        commands.create({
            name: 'subtract',
            description: 'Subtracts two numbers',
            options: [
                {
                    name: 'num1',
                    description: 'The first number',
                    required: true,
                    type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
                },
                {
                    name: 'num2',
                    description: 'The second number',
                    required: true,
                    type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
                }
        
            ]
        })  
    },
    runCommand: function(options: any, interaction: any, db: any,) {
        const num1 = options.getNumber('num1')!
        const num2 = options.getNumber('num2')!
        interaction.reply({
            content: `The Difference is ${num1 - num2}`,
            ephemeral: true,
        })
    }
}