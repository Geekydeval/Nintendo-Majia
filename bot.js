var Discord = require('discord.js');
var schedule = require('node-schedule-tz');
var bot = new Discord.Client()

bot.login(process.env.BOT_TOKEN);

bot.on('ready', function() {
    console.log(bot.user.username);
});
///////
function frasespregunta() {
  var rand = ['Si', 'No', 'Ni idea', 'Mejor que te responda otro que yo no tengo ni puta idea xd', 'Hay articulo ya en Vandal sobre eso, por si lo quieres mirar', 'Desde 2018 como mod y lo único que hace este chico es preguntar', 'Hola Allegrian :3', 'Si yo te contara, madre mía',
              '¿Otra pregunta? joder Alle, ya te vale', 'Google está a un click de distancia', 'Tengo la respuesta en la punta del hocico', '¯|_(ツ)_|¯', 'Con diferencia el peor mod del server, no toma decisiones, solo pregunta cosas, administración de pacotilla',
              'El server no es tu wikipedia personal, a informarse por ahí', 'Lo de preguntar todo el rato lo haces a posta, verdad? xd', '?'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasesban() {
  var rand = ['No, stop banning mor', 'Why dont we ban you instead, huh? ¬¬' ];

  return rand[Math.floor(Math.random()*rand.length)];
}


bot.on('message', function(message) {
  if ((message.author.id == 223467770338213888 && message.content.match(new RegExp('\\?', 'g')))){
      message.channel.send((frasespregunta()));
    }
  else if (message.content.match(':banmor:')) {
    message.channel.send((frasesban()));
  }
 else {
   return;
 }
});

