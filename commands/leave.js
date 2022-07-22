import Command from "../classes/Command.js";

class Leave extends Command {
  async run(message){
    if(this.client.voiceConnection != null){
      this.client.voiceConnection.destroy();
      this.client.voiceConnection = null;
    }
  }
}

export default Leave;
