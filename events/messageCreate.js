import Event from "../classes/Event.js";

class Ready extends Event {
  async run(message){
    if(!message.content.startsWith(this.client.prefix) && !message.content.startsWith(this.client.uniquePrefix)){
      return;
    }
    var remove = this.client.prefix;
    if(message.content.startsWith(this.client.uniquePrefix)){
      remove = this.client.uniquePrefix;
    }
    let command = this.client.getCommand(
      message.content.replace(remove, "").split(" ")[0]
    );
    if(command){
      command.run(message);
    }

  }
}

export default Ready;
