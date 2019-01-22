var Discord = require('discord.js');
var schedule = require('node-schedule-tz');
var bot = new Discord.Client()

bot.login(process.env.BOT_TOKEN);

bot.on('ready', function() {
    console.log(bot.user.username);
});

function frasescomida() {
  var rand = ['Cuervito fresco', 'Ensalada de doomed', 'Chuletón a la drama', 'Direct a la provenzal', 'Cuervo con salsa de Allegrian', 'Foskitos', 'Una selección de tacos que llegarán dentro de 6 horas',
              'Una ración de ports recién hechos', 'Coulant de Chocodrama', 'Cuervo empanado con patatas a lo pobre', 'Criadillas de Kimishima', 'Huevos estrellados del maestro furukawa', 'Patata rellena de doomed',
              'Jamón curado en #Bienvenidos', 'Inklings en su salsa', 'Octolings en tempura', 'Sushi porteado desde la bahia de 3DS', 'Pizza a la Italojapoamericana', 'Parrillada de toads', 'Una de canales nuevos',
              'un dramita fresquisimo de la bahia de Nintendo Majia' ];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasescena() {
  var rand = ['un durum', 'unos clavitos con lejia', 'los mocos', 'una tostada', 'un foster', 'una hamburguesa', 'un huevo de Dodo', 'un turco para nada sospechoso', 'nada, castigado cara a la pared' ];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasesmañana() {
  var rand = [', Al que madruga Dios lo ayuda, o en este caso consigue su Pokémon.', ', hoy será un día productivo, mucho ánimo', ', quitate esas legañas', ', que bien se estaría de nuevo en la cama ¿verdad?',
              ', se te ve con cara de sueño.'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasestvcine() {
  var rand = ['Zafarrancho en el Rancho','El vengador tóxico', 'El ataque de los tomates asesinos', 'Waterworld', 'Un ratoncito duro de roer', 'Solo en casa', 'Babe: el cerdito valiente', 'Jumanji', 'Cariño he encogido a los niños',
              'Casper y la mágica wendy', 'Superagente Cody Banks', 'Como perros y gatos', 'La tostadora valiente', 'Manuelita', 'Dragon Ball Evolution', 'Los payasos asesinos del espacio exterior', 'Castores Zombies', 'Catwoman',
              'Los 4 fantásticos', 'Resident Evil, la de la Jovovich', 'Star Wars 1: La amenaza fantasma', 'Zeitgeist', 'Papa Francisco: Un hombre de palabra'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasesusuario() {
  var rand = ['Mor', 'Xilos', 'Hector', 'Spoon', 'Ralye', 'Alem', 'Pachita', 'Morro', 'Allegrian', 'Tonio', 'Irvine', 'Aretno',
              'Ranger verde', 'Rul', 'Anti', 'Selve', 'Lanir', 'Frijolito', 'Kamalito', 'Darkam', 'Novalito', 'On3', 'Soe', 'Quetz',
              'Avelgoth', 'Dnes', 'Emlds', 'Heyt', 'Togawa', 'Werram', 'Turok', 'Frodonag'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasespareja() {
  var rand = ['Xillegrian', 'Pachartinez', 'Ralyem', 'Selvespoon', 'Markonir', 'Moretno', 'Irvimelon', 'On3roid', 'Darkamertno', 'Frijonir', 'Markotonudo',
              'Ralyegrian', 'Xilelve', 'los arribistas judeomasónicos', 'Moralye',];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasesdirect() {
  var rand = ['Mañana será otro día\n\nhttps://i.imgur.com/xBmbOcq.gif', 'Otro día mas, otra decepción mas', 'Nintendo, Gracias por tanto y perdón por tan poco', 'Tan disgustados que ni salen las palabras',
              'Este ha sido el direct mas fugaz de la historia, como lo oyen', 'Queda tan solo una hora para el té'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasespersona() {
  var rand = ['Un simpatico redactor de Vandal', 'Un simpatico Insider', 'Miyamoto', 'Furukawa', 'Leaky Pandy', 'Markomaro', 'Allegrian', 'Un usuario random de ERA', 'Lanir', 'Kimishima',
              'Xilos', 'Mor', 'Un chino random', 'El Papa Francisco', 'Marcus Sellars', 'Sakurai', 'Reggie', 'Phil Spencer', 'Emily', 'Un retrasado habitual', 'Retro Studios', 'Koizumi',
              'Pachita'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasesverbo() {
  var rand = ['echando un vistazo', 'mareando la perdiz', 'filtrando directs', 'subiendo clickbaits', 'contando sus vivencias', 'analizando el NPD', 'mostrando su colección de 3DS', 'soltando bilis',
              'diciendo cuan ofendido está', 'contruyendo un rascacielos', 'catapultando su carrera política', 'cagando', 'maldiciendo las noticias de Cristina', 'trabajando con unas condiciones deplorables',
              'dando misa', 'vendiendo la moto', 'vendiendo humo', 'rezando por nosotros', 'haciendo ports', 'abriendo canales absurdos', 'haciendo memes sin gracia', 'programando bots inutiles', 'regalando Forzas, halos y Gears',
              'dejando caer nuevos juegos', 'comiendo cuervo', 'soltando gilipolleces sin fundamento', 'haciendo barbacoas', 'contratando gente', 'chasqueando los dedos', 'borracho', 'durmiendo', 'viendo el próximo direct',
              'destilando licor para aguantar este año tan doomed', 'viendo pornografía', 'gritando cual demente'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function fraseslugar() {
  var rand = ['en ResetERA', 'en Vandal', 'en Nintendo Majia', 'en el cuartel general de Nintendo', 'en la junta de accionistas de Nintendo', 'en un hilo de Twitter', 'en el hilo de ventas de Vandal', 'en el hilo de ventas de ERA',
              'en su blog personal', 'por todas partes', 'en un vídeo de youtube', 'en la ciudad de Toronto', 'en Barcelona', 'en un baño random de mala muerte', 'en el Vaticano', 'en su cuenta de Tinder', 'en chatroulette', 'en el cielo',
              'en un pequeño cubiculo en el sotano de Nintendo', 'en Xbox', 'en la Switch', 'en Playstation', 'en Steam', 'en el sitio habitual', 'en Fortnite', 'en Sea of Thieves', 'en las oficinas', 'en el direct', 'en Linkedin', 'en una bañera',
              'al lado de la comisaría', 'en la plaza del pueblo'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frases1madrugada() {
  var rand = ['Quetz **_*JOINS THE BATTLE*_**', ''];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frases3madrugada() {
  var rand = ['**_*PERFECTO GIUSSEPE*_** 🦉',];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frases4madrugada() {
  var rand = ['¿Ve ud. esto? Inserte su publicidad aquí y haga que otros le vean a usted.', '¿Te crees Quetz? TIRA A LA CAMA',];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frases5madrugada() {
  var rand = ['Por el _*CENSURED*_ te la...',];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frases14dia() {
  var rand = ['2 horas, esto empieza a ponerse interesante', 'Que rica está la comida', '¿Notáis como se acerca?\n\nhttps://giphy.com/gifs/jurassic-park-movie-t49DdnoviCLrG', 'ahora mismo deberíais estar comiendo',
              'Ñam Ñam', 'Si en 2 horas no hay direct le pediré a moderación que expulse a Rul', '¿Nos deleitará Nintendo con un direct dentro de **2 HORAS**?'];

  return rand[Math.floor(Math.random()*rand.length)];
}

////////////////////////////////////////////////////////////////////////////////

bot.on('message', function(message) {
  if (message.content === "$loop") {

    console.log('Has metido la clave');

    var j0 = schedule.scheduleJob('0 0 * * *', function(){
      message.channel.send('**Son las 01:00**: Quetz joins the battle.');
    });
    var j1 = schedule.scheduleJob('0 1 * * *', function(){
      message.channel.send('**Son las 02:00**: ¿Estara' + '\xa0' + (frasesverbo()) + '\xa0' + 'ya' + '\xa0' + frasesusuario() + '\xa0' + '?');
    });
    var j2 = schedule.scheduleJob('0 2 * * *', function(){
      message.channel.send('**Son las 03:00**: PERFECTO GIUSSEPE 🦉');
    });
    var j3 = schedule.scheduleJob('0 3 * * *', function(){
      message.channel.send('**Son las 04:00**:' + '\xa0' + (frases4madrugada()));
    });
    var j4 = schedule.scheduleJob('0 4 * * *', function(){
      message.channel.send('**Son las 05:00**: Por el _*CENSURED*_ te la...');
    });
    var j5 = schedule.scheduleJob('0 5 * * *', function(){
      message.channel.send('**Son las 06:00**: Pachamadrugon, ufff que sueño.');
    });
    var j6 = schedule.scheduleJob('0 6 * * *', function(){
      message.channel.send('**Son las 07:00**: Buenos días' + '\xa0' + (frasesusuario()) + (frasesmañana()));
    });
    var j7 = schedule.scheduleJob('0 7 * * *', function(){
      message.channel.send('**Son las 08:00**: Hora de ir al cole, Frijolito, no te olvides del almuerzo.');
    });
    var j8 = schedule.scheduleJob('0 8 * * *', function(){
      message.channel.send('**Son las 09:00**: No se olviden del desayuno, la comida mas importante del día, reyes y reinas.');
    });
    var j9 = schedule.scheduleJob('0 9 * * *', function(){
      message.channel.send('**Son las 10:00**:' + '\xa0' + (frasespersona()) + '\xa0' + 'esta' + '\xa0' + (frasesverbo()) + '\xa0' + (fraseslugar()) + '\xa0' + 'ahora mismo, que pícaro.');
    });
    var j10 = schedule.scheduleJob('0 10 * * *', function(){
      message.channel.send('**Son las 11:00**: ¿Ya ha hecho caca' + '\xa0' + (frasesusuario()) + '?');
    });
    var j11 = schedule.scheduleJob('0 11 * * *', function(){
      message.channel.send('**Son las 12:00**: ¿Que estará haciendo' + '\xa0' + (frasespersona()) + '? seguro que' + '\xa0' + (frasesusuario()) + '\xa0' + 'está' + '\xa0' + (frasesverbo()) + '\xa0' + 'de forma sosegada.');
    });
    var j12 = schedule.scheduleJob('0 12 * * *', function(){
      message.channel.send('**Son las 13:00**: El menú de hoy es:' + '\xa0' + (frasescomida()));
    });
    var j13 = schedule.scheduleJob('0 13 * * *', function(){
      message.channel.send('**Son las 14:00**:' + '\xa0' + (frases14dia()));
    });
    var j14 = schedule.scheduleJob('0 14 * * *', function(){
      message.channel.send('**Son las 15:00**: OMG, SOLO 1 HORA MAS!!!!');
    });
    var j15 = schedule.scheduleJob('0 15 * * *', function(){
      message.channel.send('**Son las 16:00**:' + '\xa0' + (frasesdirect()));
    });
    var j16 = schedule.scheduleJob('0 16 * * *', function(){
      message.channel.send('**Son las 17:00**: Tiene toda la pinta de que mañana habrá direct.');
    });
    var j17 = schedule.scheduleJob('0 17 * * *', function(){
      message.channel.send('**Son las 18:00**: Se ha quedado una buena tarde para dramear, ¿no creen?');
    });
    var j18 = schedule.scheduleJob('0 18 * * *', function(){
      message.channel.send('**Son las 19:00**: ¿Habrán baneado hoy a' +'\xa0' + (frasesusuario()) + '?');
    });
    var j19 = schedule.scheduleJob('0 19 * * *', function(){
      message.channel.send('**Son las 20:00**: ¿Ha fichado ya Spoon?');
    });
    var j20 = schedule.scheduleJob('0 20 * * *', function(){
      message.channel.send('**Son las 21:00**: Para cenar hoy:' + '\xa0' + (frasescena()));
    });
    var j21 = schedule.scheduleJob('0 21 * * *', function(){
      message.channel.send('**Son las 22:00**: Peli y mantita en casa de' + '\xa0' + (frasespareja()) + ', hoy toca:' + '\xa0' + (frasestvcine()));
    });
    var j22 = schedule.scheduleJob('0 22 * * *', function(){
      message.channel.send('**Son las 23:00**: Mor empieza ya a sentirse cansado, le queda 1 hora de actividad.');
    });
    var j23 = schedule.scheduleJob('0 23 * * *', function(){
      message.channel.send('**Son las 00:00**: ¿Cual será el dramita de hoy? ansioso estoy por descubrirlo');
    });
  }
});
