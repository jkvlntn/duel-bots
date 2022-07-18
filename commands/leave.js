import Command from "../classes/Command.js";

class Leave extends Command {
  async run(message){
    this.client.voiceConnection.destroy();
  }
}

export default Leave;
