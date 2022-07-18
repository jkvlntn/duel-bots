import Command from "../classes/Command.js";
import {joinVoiceChannel} from "@discordjs/voice";

class Join extends Command {
  async run(message){
    if(!message.mentions.members.first()){
      const voiceChannel = message.member.voice.channel;
      if(!voiceChannel){
        message.reply("You must be in a voice channel");
        return;
      }
      this.client.voiceConnection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator
      })
    }
    else{
      const voiceChannel = message.mentions.members.first().voice.channel;
      if(!voiceChannel){
        message.reply(`${message.mentions.members.first()} must be in a voice channel`);
        return;
      }
      this.client.voiceConnection = joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator
      })
    }
  }
}

export default Join;
