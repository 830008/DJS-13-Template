import DiscordJS, {MessageEmbed, Intents } from 'discord.js'
import dotenv from 'dotenv'
const express = require("express")
const creator = require("./commandcreator.ts")
const app = express()
app.use(express.json())
const Processor = require("./processcommand.ts")
dotenv.config()
const Client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})
Client.on("ready", () => {
console.log("The Bot Is Running")
Client.user!.setPresence({activities: [{name: 'Attacking all cheaters.'}], status: 'dnd'})
const GuildId = "875844961625591848"
const guild = Client.guilds.cache.get(GuildId)
let commands
if(guild){
    commands = guild.commands

}else{
    commands = Client.application?.commands
}
creator.createCommands(guild?.commands, DiscordJS)
})
Client.on("interactionCreate", async(interaction) => {
    if(!interaction.isCommand()){
        return
    }
    const {commandName, options} = interaction
    Processor.runCommand(commandName, options, interaction)
})
Client.on("messageCreate", (message) => {
    if(message.content === "ping"){
        message.reply({
            content: "pong",
        })
    }
})
Client.login(process.env.TOKEN)
app.listen(80, function() {
  
  
})