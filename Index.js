//Archivo principal del Bot

    //Variable de enlace de control del bot
    const { Telegraf } = require('Telegraf') 

    //Prepara los recursos necesarios para el procesamiento del lenguaje natural haciendo uso de node-nlp
    const { dockStart } = require('@nlpjs/basic')

    //Enlace del bot mediante el token dado por @BotFather a la hora de crear el bot haciendo uso de la plataforma telegram.

    //PandemicHero: PandemicHero es un bot de prueba, que se uso en el desarrollo temprano del bot.
    //const bot = new Telegraf('1659752930:AAGZ01r7p1PaKFjZyJ4rjIJ9p3THFTAVUtY')

    //Pandemax: Pandemax es el bot destinado al usuario final, con una mejor imagen y mejor descripcion.
    const bot = new Telegraf('1797558685:AAEjwHXVIrlLqIzwNOOC7tWOl1yqyKBk1Bc')

    //Modificacion del comando start!
    bot.start(ctx =>{
        ctx.reply("¡Hola! Yo soy Pandemax, tu asistente virtual en la pandemia. ¿En qué te puedo ayudar " + ctx.chat.first_name + "? \n\n")
        ctx.reply("Si necesitas más informacion sobre mi uso, usa el comando '/info' para obtener una idea sobre los conocimientos que tengo.")
    })

    //Reacciona a los stickers enviados por el usuario mandando un emoji robotico.
    bot.on('sticker', ctx => {
        ctx.reply("🤖")
    })

    //Reaccion a los voices mandados por el usuario mandando un emoji robotico!
    bot.on('voice', ctx =>{
        ctx.reply("¡No puedo escuchar! 🤖")
    })

    //Haciendo uso de Telegraf, usamos la funcion command para crear un comando extra para ser usado en el bot.
    //el cual es mencionado anteriormente.
    bot.command('info',ctx=>{
        ctx.reply("Soy capaz de darte consejos o respuestas es los siguientes temas o tópicos: \n\nSalud física 💪🚴‍♀️\n\nSalud mental 💆🏻‍♀️🧘\n\nHigiene alimentaria 🥕🍎 \n\nConvivencia familiar 👪 \n\nHigiene personal🚿 \n\nBienestar económico 💰 \n\nTrabajo/estudios a distancia 📖🖋️")
    })

    //Reaccion a los audios mandados por el usuario mandando un emoji robotico con un  breve mensaje!
    bot.on('audio', ctx =>{
        ctx.reply("¡No puedo escuchar! 🤖")
    })

    //Reacciona a cualquier documento enviado con un mensaje breve y un emoji robotico.
    bot.on('document', ctx =>{
        ctx.reply("No soy capaz de leer documentos. 🤖")
    })

    //Espera a que el usuario produzca cualquier entrada de texto.
    bot.on('text', ctx => {
        (async()=>{     //De manera asincrona realiza.
            const dock = await dockStart()  //Prepara los recursos de la libreria "nlpjs@basic"
            const nlp = dock.get('nlp')     //Lee conf.json para obtener los datos necesarios
            const response = await nlp.process('es', ctx.message.text) //Procesa la entrada del usuario que se almacena en la clase ctx, especificamente en message.text
            console.log(response) //Muestra por consola el analisis una vez realizado el procesamiento del lenguaje natural.
            ctx.reply(response.answer) //Le muestra al usuario la respuesta que se almacena es response.answer!
        })()

    })
    //Lanzamiento del bot
    bot.launch()
