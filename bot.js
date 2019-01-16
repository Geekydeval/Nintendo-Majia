var Discord = require('discord.js');
var schedule = require('node-schedule-tz');
var bot = new Discord.Client()

bot.login(process.env.BOT_TOKEN);

bot.on('ready', function() {
    console.log(bot.user.username);
});

function frasestimer() {
  var rand = ['frase estandar'];

  return rand[Math.floor(Math.random()*rand.length)];
}

bot.on('message', function(message) {
  if (message.content === "$loop") {
    var j0 = schedule.scheduleJob('0 0 * * *', function(){
      message.channel.send('**Son las 00:00**: ¿Que drama toca hoy?');
    });
    var j1 = schedule.scheduleJob('0 1 * * *', function(){
      message.channel.send('**Son las 01:00**: Quetz joins the battle.');
    });
    var j2 = schedule.scheduleJob('0 2 * * *', function(){
      message.channel.send('**Son las 02:00**: ¿Estara borracho ya Lanir?');
    });
    var j3 = schedule.scheduleJob('0 3 * * *', function(){
      message.channel.send('**Son las 03:00**: PERFECTO GIUSSEPE 🦉');
    });
    var j4 = schedule.scheduleJob('0 4 * * *', function(){
      message.channel.send('**Son las 04:00**: ¿Ve ud. esto? Inserte su publicidad aquí y haga que otros le vean a usted.');
    });
    var j5 = schedule.scheduleJob('0 5 * * *', function(){
      message.channel.send('**Son las 05:00**: Por el _*CENSURED*_ te la...');
    });
    var j6 = schedule.scheduleJob('0 6 * * *', function(){
      message.channel.send('**Son las 06:00**: Pachamadrugon, ufff que sueño.');
    });
    var j7 = schedule.scheduleJob('0 7 * * *', function(){
      message.channel.send('**Son las 07:00**: Buenos días Kamalito, Al que madruga Dios lo ayuda, o en este caso consigue su Pokémon.');
    });
    var j8 = schedule.scheduleJob('0 8 * * *', function(){
      message.channel.send('**Son las 08:00**: Hora de ir al cole, Frijolito, no te olvides del almuerzo.');
    });
    var j9 = schedule.scheduleJob('0 9 * * *', function(){
      message.channel.send('**Son las 09:00**: ¿?');
    });
    var j10 = schedule.scheduleJob('0 10 * * *', function(){
      message.channel.send('**Son las 10:00**: ¿?');
    });
    var j11 = schedule.scheduleJob('0 11 * * *', function(){
      message.channel.send('**Son las 11:00**: ¿Ya ha hecho caca en el trabajo Hector?');
    });
    var j12 = schedule.scheduleJob('0 12 * * *', function(){
      message.channel.send('**Son las 12:00**: ¿Que noticia habrá publicado hoy Cristina? seguro que Mor está deseando leerla de forma sosegada.');
    });
    var j13 = schedule.scheduleJob('0 13 * * *', function(){
      message.channel.send('**Son las 13:00**: El menú de hoy es cuervito fresco.');
    });
    var j14 = schedule.scheduleJob('0 14 * * *', function(){
      message.channel.send('**Son las 14:00**: 2 horas hasta el anuncio del direct, esto empieza a ponerse interesante');
    });
    var j15 = schedule.scheduleJob('0 15 * * *', function(){
      message.channel.send('**Son las 15:00**: OMG, SOLO 1 HORA MAS HASTA QUE SE ANUNCIE EL DIRECT, QUE NERVIOS!!!!');
    });
    var j16 = schedule.scheduleJob('0 16 * * *', function(){
      message.channel.send('**Son las 16:00**: Mañana será otro día\nhttps://i.imgur.com/xBmbOcq.gif');
    });
    var j17 = schedule.scheduleJob('0 17 * * *', function(){
      message.channel.send('**Son las 17:00**: Pues se ha quedado buena tarde, ¿no creen?');
    });
    var j18 = schedule.scheduleJob('0 18 * * *', function(){
      message.channel.send('**Son las 18:00**: ');
    });
    var j19 = schedule.scheduleJob('0 19 * * *', function(){
      message.channel.send('**Son las 19:00**: ¿?');
    });
    var j20 = schedule.scheduleJob('0 20 * * *', function(){
      message.channel.send('**Son las 20:00**: ¿?');
    });
    var j21 = schedule.scheduleJob('0 21 * * *', function(){
      message.channel.send('**Son las 21:00**: ¿?');
    });
    var j22 = schedule.scheduleJob('0 22 * * *', function(){
      message.channel.send('**Son las 22:00**: ¿?');
    });
    var j23 = schedule.scheduleJob('0 23 * * *', function(){
      message.channel.send('**Son las 23:00**: Mor empieza ya a sentirse cansado, le queda 1 hora de actividad.');
    });
  }
});
