const Discord = require("discord.js");
const Command = require("./command.js");

const AUTH_TOKEN = "OTk3OTMyMzU5MTU4NjE2MTY1.G-8R9Y.ndrUpeCKE5bwbZZOGnIxD6ZYYNso1ZGNNxEiA8";

const COMMAND_KEY = "?db";
const COMMAND_IDENTIFIER = "a";

const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
})

client.login(AUTH_TOKEN);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
})

client.on("messageCreate", (message) => {
    if(isToBot(message.content, COMMAND_KEY, COMMAND_IDENTIFIER)){
      const command = new Command(message.content);
      console.log(`Received Command: ${command.action} [${command.args}]`);
      message.reply(runCommand(command));
    }
})

function isToBot(content, key, identifier){
  if(content.indexOf(' ') == -1){
    if(content == key || content == key+identifier){
      return true;
    }
    return false;
  }
  if(content.split(" ")[0] == key || content.split(" ")[0] == key+identifier){
    return true;
  }
    return false;
}

function runCommand(command){
  if(command.action == ""){
    return "Invalid Command. Use ?db help for a list of commands";
  }
  if(command.action == "help"){
    
  }
  return "Invalid Command. Use ?db help for a list of commands";
}
