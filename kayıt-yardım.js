const Discord = require('discord.js');
const ayarlar = require('../config.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('GOLD')
.setTitle(`**HATIRLATMA!**`)
.setDescription(`**\`Register\` Ege Pekkolay Ayarlamalı Register Altyapı**

:wrench: **\`Ayarlanabilen Komutlar\`**

:white_check_mark: **\`${prefix}alınacak-rol @roletiket\`: Kayıt ettikten sonra alınacak rolü belirlersiniz.**

:white_check_mark: **\`${prefix}erkek-rol @roletiket\`: Erkek Rolünü ayarlarsınız.**

:white_check_mark: **\`${prefix}kız-rol @roletiket\`: Kız rolünü ayarlarsınız.**

:white_check_mark: **\`${prefix}.kayıt-hg #kanaletiket\`: Hoşgeldin mesajını ayarlarsınız.**

:white_check_mark: **\`${prefix}kayıt-kanal #kayıt-kanal\`: Kayıt edilecek kanalı ayarlarsınız.**

:white_check_mark: **\`${prefix}kayıtçı-rol @roletiket\`: Kayıt yetkilisini rolünü ayarlayın.**

:wrench: **\`Kayıt Komutları\`**

:white_check_mark: **\`${prefix}erkek\`: Erkek kayıt edersiniz.**

:white_check_mark: **\`${prefix}kız\`: Kız kayıt edersiniz.**

`)




message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["kayıt", "register"], 
  permLevel: 0
};

exports.help = {
  name: "yardımkkayıt",
  description: 'koruma Yardım Menüsü',
  usage: 'kayıt'
};