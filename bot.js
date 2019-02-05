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
              'un dramita fresquisimo de la bahia de Nintendo Majia', 'Costillitas de Yoshi'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasescena() {
  var rand = ['un durum', 'unos clavitos con lejia', 'los mocos', 'una tostada', 'un foster', 'una hamburguesa', 'un huevo de Dodo', 'un turco para nada sospechoso', 'nada, castigado cara a la pared' ];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasestvcine() {
  var rand = ['Zafarrancho en el Rancho','El vengador tóxico', 'El ataque de los tomates asesinos', 'Waterworld', 'Un ratoncito duro de roer', 'Solo en casa', 'Babe: el cerdito valiente', 'Jumanji', 'Cariño he encogido a los niños',
              'Casper y la mágica wendy', 'Superagente Cody Banks', 'Como perros y gatos', 'La tostadora valiente', 'Manuelita', 'Dragon Ball Evolution', 'Los payasos asesinos del espacio exterior', 'Castores Zombies', 'Catwoman',
              'Los 4 fantásticos', 'Resident Evil, la de la Jovovich', 'Star Wars 1: La amenaza fantasma', 'Zeitgeist', 'Papa Francisco: Un hombre de palabra', 'La venganza del conde de Montecristo', 'En busca del valle encantado',
              'Pokémon 2: El Poder de Uno', 'Digimon: La película', 'Un canguro super duro', 'San Andrés', 'Chicken Run: Evasión en la granja'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasesusuario() {
  var rand = ['Mor', 'Xilos', 'Hector', 'Spoon', 'Ralye', 'Alem', 'Pachita', 'Morro', 'Allegrian', 'Tonio', 'Irvine', 'Aretno',
              'El ranger verde', 'Rul', 'Anti', 'Selve', 'Lanir', 'Frijolito', 'Kamalito', 'Darkam', 'Novalito', 'On3', 'Soe', 'Quetz',
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
              'Pachita', 'Tanabe'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasesverbo() {
  var rand = ['echando un vistazo', 'mareando la perdiz', 'filtrando directs', 'subiendo clickbaits', 'contando sus vivencias', 'analizando el NPD', 'mostrando su colección de 3DS', 'soltando bilis',
              'diciendo cuan ofendido está', 'contruyendo un rascacielos', 'catapultando su carrera política', 'cagando', 'maldiciendo las noticias de Cristina', 'trabajando con unas condiciones deplorables',
              'dando misa', 'vendiendo la moto', 'vendiendo humo', 'rezando por nosotros', 'haciendo ports', 'abriendo canales absurdos', 'haciendo memes sin gracia', 'programando bots inutiles', 'regalando Forzas, halos y Gears',
              'dejando caer nuevos juegos', 'comiendo cuervo', 'soltando gilipolleces sin fundamento', 'haciendo barbacoas', 'contratando gente', 'chasqueando los dedos', 'borracho', 'durmiendo', 'viendo el próximo direct',
              'destilando licor para aguantar este año tan doomed', 'viendo pornografía', 'gritando cual demente', 'baneando usuarios', 'haciendo exhibicionismo', 'desvariando', 'haciendo datamining',
              'levantando un muro', 'posteando noticias', 'cancelando proyectos', 'tocando el banjo'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasesverbo2() {
  var rand = ['dramear', 'lamentar nuestra penosa existencia', 'maldecir a Nintendo', 'esparcir falsos rumores por Twitter para que Vandal los publique como noticia contrastada', 'emborracharse', 'teorizar sobre cuando será el próximo direct',
              'reirse de Markomaro', 'banear a Selve para solucionar nuestros problemas', 'hacer una manifestación no violenta con fuegos y hostias volando', 'predecir cuando Miyamoto se irá de Nintendo', 'procrastinar como siempre',
              'pedir ports', 'hacer una barbacoa expectacular como las de Retro', 'echarse unos smashes para romper relaciones', 'jugar al Mario Party y ver como solo hay 4 tableros', 'montar una pequeña tangana donde caben todos',
              'partirle las piernas a Mor, que hijo de puta', 'gritar a los  4 vientos ¡¡¡DIRECT!!! y ver como nos envian a todos a #bienvenidos', 'un golpe de estado', 'invadir Almería'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function fraseslugar() {
  var rand = ['en ResetERA', 'en Vandal', 'en Nintendo Majia', 'en el cuartel general de Nintendo', 'en la junta de accionistas de Nintendo', 'en un hilo de Twitter', 'en el hilo de ventas de Vandal', 'en el hilo de ventas de ERA',
              'en su blog personal', 'por todas partes', 'en un vídeo de youtube', 'en la ciudad de Toronto', 'en Barcelona', 'en un baño random de mala muerte', 'en el Vaticano', 'en su cuenta de Tinder', 'en chatroulette', 'en el cielo',
              'en un pequeño cubiculo en el sotano de Nintendo', 'en Xbox', 'en la Switch', 'en Playstation', 'en Steam', 'en el sitio habitual', 'en Fortnite', 'en Sea of Thieves', 'en las oficinas', 'en el direct', 'en Linkedin', 'en una bañera',
              'al lado de la comisaría', 'en la plaza del pueblo', 'en la sección de pornografía homosexual de Pornhub', 'en un bar cutre', 'en la puerta del colegio', 'alrededor de la casa blanca', 'en la parroquia', 'en alcoholicos anónimos',
              'en un comedor de cáritas', 'en hacienda', 'en las oficinas de retro', 'en la gala de los Oscar', 'en casa de Reggie'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frases1madrugada() {
  var rand = ['**_*JOINS THE BATTLE*_**', 'duerme placidamente', 'observa desde las sombras lo que aquí se comenta', 'sufre de insomnio y por ello sigue aquí', 'está en medio de un viaje astral',
              'está experimentando un viaje psicotrópico a través del lo-fi, la electronica experimental y las sustancias estupefacientes', 'está en la cama pero con los ojos abiertos pensando en cosas del pasado',
              'lamenta que este espacio del reloj sea tan soso', 'está viviendo lo mismo que el anuncio de la marmota', 'está pensando por qué está aún despierto leyendo esto'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frases3madrugada() {
  var rand = ['**_*PERFECTO GIUSSEPE*_** 🦉', 'No puedo ver ni un minuuuuuuuuuuto\nDe mi serie favoriiiiiiita\nEn seguida me quedo frita\nMarmota ya es mi colchón\nY ya duerme como yoooooo'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frases4madrugada() {
  var rand = ['¿Ve ud. esto? Inserte su publicidad aquí y haga que otros le vean a usted.', '¿Te crees Quetz? TIRA A LA CAMA', 'Una partidita mas y a la cama, ¿a que si?'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frases5madrugada() {
  var rand = ['Por el _*CENSURED*_ te la...',];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frasesmañana() {
  var rand = [', Al que madruga Dios lo ayuda, o en este caso consigue su Pokémon.', ', hoy será un día productivo, mucho ánimo', ', quitate esas legañas', ', que bien se estaría de nuevo en la cama ¿verdad?',
              ', se te ve con cara de sueño.', ', joder, ya tienes mala cara.', ', piensa que hoy tampoco habrá direct', ', es otro día lleno de clickbaits y decepción', ', tienes cara de haber tenido otra vez esa pesadilla',
              ', pretendía tener una frase motivacional para ti pero no estoy motivado', ', hoy puede ser tu gran día (me han dicho que hay direct)'];

  return rand[Math.floor(Math.random()*rand.length)];
}


function frases14dia() {
  var rand = ['2 horas, esto empieza a ponerse interesante', 'Que rica está la comida', '¿Notáis como se acerca?\n\nhttps://giphy.com/gifs/jurassic-park-movie-t49DdnoviCLrG', 'ahora mismo deberíais estar comiendo',
              'Ñam Ñam', 'Si en 2 horas no hay direct le pediré a moderación que expulse a Rul', '¿Nos deleitará Nintendo con un direct dentro de **2 HORAS**?', 'Hoy no hay direct, dejadlo estar ya, cansinos',
              'comidita y siesta, ole que ole'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frases20tarde() {
  var rand = ['nacido una estrella', 'sido avistado un exhibicionista en las proximidades', 'perdido los papeles una persona', 'sido detenido un usuario que tiraba 3DS desde un balcón', 'sucumbido a la falta de Direct y se ha quitado la vida',
              'sido encontrado abrazado a un durum en las escaleras de un portal', 'estado comiendose un donut'];

  return rand[Math.floor(Math.random()*rand.length)];
}

function frases23noche() {
  var rand = ['está a tope video una película, no le hace ni caso al discord', 'está cagando de tal forma que parece Thor empuñando el Mjolnir',
              'ha dicho que vuestra madre es gorda', ''];

  return rand[Math.floor(Math.random()*rand.length)];
}

////////////////////////////////////////////////////////////////////////////////

bot.on('message', function(message) {
  if (message.content === "$iniciate") {
    ///
    var rule1 = new schedule.RecurrenceRule();
    rule1.dayOfWeek = [0, new schedule.Range(1, 6)];
    rule1.hour = 01;
    rule1.minute = 0;

    var j = schedule.scheduleJob(rule1, function(){
      message.channel.send('**Son las 01:00**:' + '\xa0' + (frasesusuario()) + '\xa0' + (frases1madrugada()));
    });
    ///
    var rule2 = new schedule.RecurrenceRule();
    rule2.dayOfWeek = [0, new schedule.Range(1, 6)];
    rule2.hour = 02;
    rule2.minute = 0;

    var j = schedule.scheduleJob(rule2, function(){
      message.channel.send('**Son las 02:00**: ¿Estara' + '\xa0' + (frasesverbo()) + '\xa0' + 'ya' + '\xa0' + frasesusuario() + '\xa0' + '?');
    });
    ///
    var rule3 = new schedule.RecurrenceRule();
    rule3.dayOfWeek = [0, new schedule.Range(1, 6)];
    rule3.hour = 03;
    rule3.minute = 0;

    var j = schedule.scheduleJob(rule3, function(){
      message.channel.send('**Son las 03:00**:' + '\xa0' + (frases3madrugada()));
    });
    ///
    var rule4 = new schedule.RecurrenceRule();
    rule4.dayOfWeek = [0, new schedule.Range(1, 6)];
    rule4.hour = 04;
    rule4.minute = 0;

    var j = schedule.scheduleJob(rule4, function(){
      message.channel.send('**Son las 04:00**:' + '\xa0' + (frases4madrugada()));
    });
    ///
    var rule5 = new schedule.RecurrenceRule();
    rule5.dayOfWeek = [0, new schedule.Range(1, 6)];
    rule5.hour = 05;
    rule5.minute = 0;

    var j = schedule.scheduleJob(rule5, function(){
      message.channel.send('**Son las 05:00**: Por el _*CENSURED*_ te la...');
    });
    ///
    var rule6 = new schedule.RecurrenceRule();
    rule6.dayOfWeek = [1, new schedule.Range(2, 5)];
    rule6.hour = 06;
    rule6.minute = 0;

    var j = schedule.scheduleJob(rule6, function(){
      message.channel.send('**Son las 06:00**: Pachamadrugon, ufff que sueño.');
    });
    ///
    var rule7 = new schedule.RecurrenceRule();
    rule7.dayOfWeek = [1, new schedule.Range(2, 5)];
    rule7.hour = 07;
    rule7.minute = 0;

    var j = schedule.scheduleJob(rule7, function(){
      message.channel.send('**Son las 07:00**: Buenos días' + '\xa0' + (frasesusuario()) + (frasesmañana()));
    });
    ///
    var rule8 = new schedule.RecurrenceRule();
    rule8.dayOfWeek = [1, new schedule.Range(2, 5)];
    rule8.hour = 08;
    rule8.minute = 0;

    var j = schedule.scheduleJob(rule8, function(){
       message.channel.send('**Son las 08:00**: Hora de ir al cole, Frijolito, no te olvides del almuerzo.');
    });
    ///
    var rule9 = new schedule.RecurrenceRule();
    rule9.dayOfWeek = [1, new schedule.Range(2, 5)];
    rule9.hour = 09;
    rule9.minute = 0;

    var j = schedule.scheduleJob(rule9, function(){
       message.channel.send('**Son las 09:00**: No se olviden del desayuno, la comida mas importante del día, reyes y reinas.');
    });
    ///
    var rule10 = new schedule.RecurrenceRule();
    rule10.dayOfWeek = [0, new schedule.Range(1, 6)];
    rule10.hour = 10;
    rule10.minute = 0;

    var j = schedule.scheduleJob(rule10, function(){
       message.channel.send('**Son las 10:00**:' + '\xa0' + (frasespersona()) + '\xa0' + 'esta' + '\xa0' + (frasesverbo()) + '\xa0' + (fraseslugar()) + '\xa0' + 'ahora mismo, que barbaro.');
    });
    ///
    var rule11 = new schedule.RecurrenceRule();
    rule11.dayOfWeek = [0, new schedule.Range(1, 6)];
    rule11.hour = 11;
    rule11.minute = 0;

    var j = schedule.scheduleJob(rule11, function(){
       message.channel.send('**Son las 11:00**: ¿Ya ha hecho caca' + '\xa0' + (frasesusuario()) + '?');
    });
    ///
    var rule12 = new schedule.RecurrenceRule();
    rule12.dayOfWeek = [0, new schedule.Range(1, 6)];
    rule12.hour = 12;
    rule12.minute = 0;

    var j = schedule.scheduleJob(rule12, function(){
       message.channel.send('**Son las 12:00**: ¿Que estará haciendo' + '\xa0' + (frasespersona()) + '? seguro que' + '\xa0' + (frasesusuario()) + '\xa0' + 'está' + '\xa0' + (frasesverbo()) + '\xa0' + 'de forma sosegada.');
    });
    ///
    var rule13 = new schedule.RecurrenceRule();
    rule13.dayOfWeek = [0, new schedule.Range(1, 6)];
    rule13.hour = 13;
    rule13.minute = 0;

    var j = schedule.scheduleJob(rule13, function(){
       message.channel.send('**Son las 13:00**: El menú de hoy es:' + '\xa0' + (frasescomida()));
    });
    ///
    var rule14 = new schedule.RecurrenceRule();
    rule14.dayOfWeek = [1, new schedule.Range(2, 4)];
    rule14.hour = 14;
    rule14.minute = 0;

    var j = schedule.scheduleJob(rule14, function(){
       message.channel.send('**Son las 14:00**:' + '\xa0' + (frases14dia()));
    });
    ///
    var rule15 = new schedule.RecurrenceRule();
    rule15.dayOfWeek = [1, new schedule.Range(2, 4)];
    rule15.hour = 15;
    rule15.minute = 0;

    var j = schedule.scheduleJob(rule15, function(){
       message.channel.send('**Son las 15:00**: OMG, SOLO 1 HORA MAS!!!!');
    });
    ///
    var rule16 = new schedule.RecurrenceRule();
    rule16.dayOfWeek = [1, new schedule.Range(2, 4)];
    rule16.hour = 16;
    rule16.minute = 0;

    var j = schedule.scheduleJob(rule16, function(){
       message.channel.send('**Son las 16:00**:' + '\xa0' + (frasesdirect()));
    });
    ///
    var rule17 = new schedule.RecurrenceRule();
    rule17.dayOfWeek = [1, new schedule.Range(2, 4)];
    rule17.hour = 17;
    rule17.minute = 0;

    var j = schedule.scheduleJob(rule17, function(){
       message.channel.send('**Son las 17:00**: Tiene toda la pinta de que mañana habrá direct.');
    });
    ///
    var rule18 = new schedule.RecurrenceRule();
    rule18.dayOfWeek = [0, new schedule.Range(1, 6)];
    rule18.hour = 18;
    rule18.minute = 0;

    var j = schedule.scheduleJob(rule18, function(){
      message.channel.send('**Son las 18:00**: Se ha quedado una buena tarde para' + '\xa0' + (frasesverbo2()) + ', ¿no creen?');
    });
    ///
    var rule19 = new schedule.RecurrenceRule();
    rule19.dayOfWeek = [0, new schedule.Range(1, 6)];
    rule19.hour = 19;
    rule19.minute = 0;

    var j = schedule.scheduleJob(rule19, function(){
      message.channel.send('**Son las 19:00**: ¿Habrán baneado hoy a' +'\xa0' + (frasesusuario()) + '?');
    });
    ///
    var rule20 = new schedule.RecurrenceRule();
    rule20.dayOfWeek = [0, new schedule.Range(1, 6)];
    rule20.hour = 20;
    rule20.minute = 0;

    var j = schedule.scheduleJob(rule20, function(){
      message.channel.send('**Son las 20:00**: Ha nacido una estrella y su nombre es' + '\xa0' + (frasesusuario()));
    });
    ///
    var rule21 = new schedule.RecurrenceRule();
    rule21.dayOfWeek = [0, new schedule.Range(1, 6)];
    rule21.hour = 21;
    rule21.minute = 0;

    var j = schedule.scheduleJob(rule21, function(){
      message.channel.send('**Son las 21:00**: Para cenar hoy:' + '\xa0' + (frasescena()));
    });
    ///
    var rule22 = new schedule.RecurrenceRule();
    rule22.dayOfWeek = [0, new schedule.Range(1, 6)];
    rule22.hour = 22;
    rule22.minute = 0;

    var j = schedule.scheduleJob(rule22, function(){
      message.channel.send('**Son las 22:00**: Peli y mantita en casa de' + '\xa0' + (frasespareja()) + ', hoy toca:' + '\xa0' + (frasestvcine()));
    });
    ///
    var rule23 = new schedule.RecurrenceRule();
    rule23.dayOfWeek = [0, new schedule.Range(1, 6)];
    rule23.hour = 23;
    rule23.minute = 0;

    var j = schedule.scheduleJob(rule23, function(){
       message.channel.send('**Son las 23:00**:' + '\xa0' + (frasesusuario()) + '\xa0' + (frases23noche()));
    });
    ///
    var rule24 = new schedule.RecurrenceRule();
    rule24.dayOfWeek = [0, new schedule.Range(1, 6)];
    rule24.hour = 24;
    rule24.minute = 0;

    var j = schedule.scheduleJob(rule24, function(){
       message.channel.send('**Son las 00:00**: ¿Cual será el dramita de hoy? ansioso estoy por descubrirlo');
    });
  }
});
