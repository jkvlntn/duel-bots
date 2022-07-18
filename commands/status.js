import Command from "../classes/Command.js";

class Status extends Command {
  async run(message){
    message.reply("Awaiting commands");
    console.log(this.client);
  }
}

export default Status;
