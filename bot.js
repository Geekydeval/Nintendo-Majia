var Discord = require('discord.js');
var schedule = require('node-schedule-tz');
var bot = new Discord.Client()

bot.login(process.env.BOT_TOKEN);

bot.on('ready', function() {
    console.log(bot.user.username);
});
///////
function Piscatella() {
  var rand = ['Piscatella, Gilipollas', 'B-O-C-A-C-H-A-N-C-L-A-S'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasesban() {
  var rand = ['NO HAY COJONES A BANEAR AL ADMIN', 'Vamos a ver, algarroba, Mor es el admin, ¿como coño lo vas a banear?', 'A ti si te vamos a banear, pero de un hostiazo' ];

  return rand[Math.floor(Math.random()*rand.length)];
}

bot.on('message', function(message) {
  if ((message.content.match(new RegExp('https://twitter.com/MatPiscatella/status', 'g')))){
      message.channel.send((Piscatella()));
    }
  else if (message.content.match(':banmor:')) {
    message.channel.send((frasesban()));
  }
 else {
   return;
 }
});
