const { Command, Discord } = require('@greencoast/discord.js-extended');
const { MessageEmbed } = require('discord.js');
const { MESSAGE_EMBED } = require('../../common/constants');

class Invite extends Command {
  constructor(client) {
    super(client, {
      name: 'invite',
      aliases: ['inv'],
      description: 'invite bot',
      emoji: ':question:',
      group: 'misc',
      guildOnly: true
    });
  }



  run(client, message, args, user, text, prefix) {
    try {
      var embed = new Discord.MessageEmbed()

        .setTitle(":heart: Thanks for inviting me!")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=737826514250498080&permissions=8&scope=bot`)
        .setDescription(`[Click here](https://discord.com/api/oauth2/authorize?client_id=737826514250498080&permissions=8&scope=bot)`)
      message.channel.send(embed);

    } catch (e) {
      console.log(String(e.stack).bgRed)

      var embed = new Discord.MessageEmbed()
        .setTitle(`${emoji.msg.ERROR} ERROR | An error occurred`)
        .setDescription(`\`\`\`${e.message}\`\`\``)

      return message.channel.send(embed);
    }
  }

module.exports = Invite;
