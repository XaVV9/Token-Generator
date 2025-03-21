const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message, args) => {
  if (message.channel.id !== client.channel.generator) return message.channel.sendErrorMessage(`This command can only be used in <#${client.channel.generator}>`);
  fs.readFile('./accounts/steam.txt', (err, file) => {
    if (file.length == 0) {
      message.channel.send(new MessageEmbed().setDescription(`Sorry we are out of stock on \`${message.content.slice(client.config.PREFIX.length).split(/ +/)}\` Accounts`));
    } else {
      fs.readFile('./accounts/steam.txt', 'utf8', function (err, data) {
        if (err) throw err;

        data = data + '';
        var lines = data.split('\n');
        let account = lines[Math.floor(Math.random() * 1)];

        fs.writeFile('./accounts/steam.txt', lines.slice(1).join('\n'), function (err) {
          if (err) throw err;
        });
        const acc = account.split(':');
        message.author.send({
          embed: {
            title: 'Steam Account',
            color: `${client.color.LightGreen}`,
            fields: [
              {
                name: 'Username/Email',
                value: acc[0],
              },
              {
                name: 'Password',
                value: acc[1],
              },
              {
                name: 'Copy:Paste',
                value: account,
              },
            ],
          },
        });

        const genembed = new MessageEmbed()
          .setAuthor('<:verifi:816931754282713108>SEA GEN', `${client.config.links.GenIcon}`, `${client.config.links.HandlerInvite}`)
          .setURL('https://discord.gg/uwqKbUYWcW')
          .setTitle('Account Generated!')
          .setDescription(`${client.emoji.success}Check your dm for the account's information!`)
          .setColor(client.color.Green)
          .setFooter(`<:verifi:816931754282713108>SEA GEN©`)
          .setTimestamp();

        message.channel.send(genembed);
      });
    }
  });
};

module.exports.help = {
  name: 'steam',
  aliases: ['steam'],
  category: 'generator',
  description: 'generate an origin account',
  cooldown: 60,
  usage: '',
  example: [],
};
