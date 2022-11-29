const fs = require('fs')
module.exports = {
    runCommand: async function(commandName: string, options: any, interaction: any){
        if(fs.existsSync("./commands/"+commandName+".ts")){
            require("./commands/"+commandName+".ts").runCommand(options, interaction)
        }else{
            interaction.reply({
                content: 'This command does not exist.',
                ephmeral: true,
            })
        }
    }
}