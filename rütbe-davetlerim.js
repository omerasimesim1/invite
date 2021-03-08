const Discord = require("discord.js");
const Database = require("../Helpers/Database");
// exports.onLoad = (client) => {};
/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
exports.run = async (client, message, args) => {
    const db = new Database("./Servers/" + message.guild.id, "Invites");
    var data = db.get(`invites.${message.member.id}`) || { total: 0, fake: 0, inviter: null, regular: 0, bonus: 0, leave: 0 };
    var embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setFooter('Developed By ED').setDescription(`:white_check_mark:Toplam Davet**(Total İnvites)**: **${(data.total || 0) + (data.bonus || 0)}** İnvite\n\n:x:Sunucudan Ayrılanlar**(leave)**: **${data.leave || 0}** Leave\n\n\:poop:Sahte Hesaplar**(Fake Account)**: **${data.fake || 0}** Fake Account`)
    .setColor("RANDOM");
    message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davetlerim', 'davetler', 'İNVİTE'],
  permLevel: 0
};
exports.help = {
  name: 'invites',
  description: 'Logo Yaparsınız',
  usage: 'm-logo <yazı>'
};
