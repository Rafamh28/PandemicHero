//Archivo principal del Bot

    //Variable de enlace de control del bot
    const { Telegraf } = require('Telegraf')
    const { dockStart } = require('@nlpjs/basic')
    //Enlace al bot mediante el token!
    //PandemicHero:
    //const bot = new Telegraf('1659752930:AAGZ01r7p1PaKFjZyJ4rjIJ9p3THFTAVUtY')
    //Pandemax:
    const bot = new Telegraf('1797558685:AAEjwHXVIrlLqIzwNOOC7tWOl1yqyKBk1Bc')

    bot.start(ctx =>{
        ctx.reply("¡Hola! Yo soy Pandemax, tu asistente virtual en la pandemia. ¿En qué te puedo ayudar " + ctx.chat.first_name + "?")
    })

    bot.on('sticker', ctx => {
        ctx.reply("🤖")
    })

    bot.on('text', ctx => {
        (async()=>{
            const dock = await dockStart()
            const nlp = dock.get('nlp')
            const response = await nlp.process('es', ctx.message.text)
            console.log(response)
            ctx.reply(response.answer)

        })()

    })
    //Lanzamiento del bot
    bot.launch()
