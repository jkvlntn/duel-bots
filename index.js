import Bot from "./classes/Bot.js";

const client_a = new Bot({
  intents: [
    "GUILD_MESSAGES",
    "GUILDS",
    "GUILD_VOICE_STATES"
  ],
  prefix: "."
}, "a");

client_a.loadEvents();
client_a.loadCommands();
client_a.start("OTk3OTMyMzU5MTU4NjE2MTY1.G-8R9Y.ndrUpeCKE5bwbZZOGnIxD6ZYYNso1ZGNNxEiA8");
