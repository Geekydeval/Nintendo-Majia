var Discord = require('discord.js');
var schedule = require('node-schedule-tz');
var bot = new Discord.Client()

bot.login(process.env.BOT_TOKEN);

bot.on('ready', function() {
    console.log(bot.user.username);
});
///////
function Piscatella() {
  var rand = ['Piscatella, Gilipollas', 'B-O-C-A-C-H-A-N-C-L-A-S', 'madre mía, ¿TE QUIERES CALLAR YA?', 'Piscatella, tienes menos criterio que Lanir', 'Mi sentido analista dice que estás en el puesto #1 de tarado'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function Chaos() {
  var rand = ['No se dice caos, se dice _*Chaos*_', 'Para caos el de este chat',
               'Im here to kill chaos, bitches'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function Geoff() {
  var rand = ['A ti quien te ha dado vela en este entierro', 'Joder Geoff, peor que un niño chico, QUE TIENES PELOS EN LOS HUEVOS, HOMBRE', 'Si no te hacemos casito no eres feliz, eh?', 'Madre mía, te dejamos de hacer caso 5 minutos y tienes que llamar la atención, tela.'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function Nibel() {
  var rand = ['Deja de robar contenido, cateto', '¿Has acreditado ya a los autores correspondientes? ¿no? Vaya, que inesperado', 'Nibel, Subnormal!', 'Si algo tiene claro este bot es que Nibel es un pícaro ladronzuelo', 'Mira Mor, estoy cansado de siempre decir lo mismo, peleate tu con Nibel o algo y a mi dejame en paz'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasesban() {
  var rand = ['A ti si te vamos a banear, pero de un hostiazo', 'Cierra el pico o quien acabará baneado eres tu, algarroba', 'HOSTIA MANOLO, ENHORABUENA, TIENES TODAS LAS PAPELETAS PARA SER BANEADO' ];

  return rand[Math.floor(Math.random()*rand.length)];
}

bot.on('message', function(message) {
  if ((message.content.match(new RegExp('https://twitter.com/MatPiscatella/status', 'g')))){
      message.channel.send((Piscatella()));
    }
  else if ((message.content.match(new RegExp('https://twitter.com/geoffkeighley/status', 'g')))){
      message.channel.send((Geoff()));
    }
   else if ((message.content.match(new RegExp('https://twitter.com/Nibellion/status/', 'g')))){
      message.channel.send((Nibel()));
    }
    else if ((message.content.match(new RegExp('caos', 'g')))){
      message.channel.send((Chaos()));
    }
  else if (message.content.match(':banmor:')) {
    message.channel.send((frasesban()));
  }
 else {
   return;
 }
});
