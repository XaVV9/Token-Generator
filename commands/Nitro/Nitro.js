const randomstring = require('randomstring');
module.exports.run = async (client, message) => {
  if (message.channel.id !== client.channel.nitro) return message.channel.sendErrorMessage(`This command can only be used in <#${client.channel.nitro}>`);
  message.delete();
  message.channel.send('na trafienie działającego nitro jest bardzo mała szansa :)/there is a very small chance to hit a working nitro :)  https://discord.gift/' + randomstring.generate(30));
};

module.exports.help = {
  name: 'nitro',
  aliases: ['nitro'],
  category: 'kahoot',
  description: 'Generate a random nitro code!',
  cooldown: 5,
  usage: '',
  example: [],
};
