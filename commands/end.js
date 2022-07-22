import Command from "../classes/Command.js";
import path from "path";
import {createAudioResource} from "@discordjs/voice";

class End extends Command {
  async run(message){
    if(!this.client.voiceConnection){
      message.reply(`I'm not in a voice channel`);
      return;
    }
    const resource = createAudioResource(path.resolve("media/end_sound.mp3"));
    this.client.audioPlayer.play(resource);
    const subscription = this.client.voiceConnection.subscribe(this.client.audioPlayer);

  }
}

export default End;
