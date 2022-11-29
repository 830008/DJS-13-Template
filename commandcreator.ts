import fs from 'fs'
import path from 'path'
module.exports = {
    createCommands: function(commands: any, DiscordJS: any) {
       let files =  fs.readdirSync("./commands")
files.forEach(function(file){
    if(path.extname(file) === ".ts"){
        require("./commands/"+file).createCommand(commands, DiscordJS)
    }
})
        
            

    }
}