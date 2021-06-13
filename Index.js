//Archivo principal del Bot

    //Variable de enlace de control del bot
    const { Telegraf } = require('Telegraf')
    
    //Enlace al bot mediante el token!
    const bot = new Telegraf('1659752930:AAGZ01r7p1PaKFjZyJ4rjIJ9p3THFTAVUtY')

    bot.start(ctx =>{
        ctx.reply("Hola, mi nombre es Gary. En que te puedo ayudar " + ctx.chat.first_name + " " + ctx.chat.last_name + "?")
    })

    bot.on('sticker', ctx => {
        ctx.reply("Te gustan los stickers?")
    })

    bot.on('text', ctx => {
        ctx.reply("No puedo responderte de manera adecuada en este momento.")
    })
    //Lanzamiento del bot
    bot.launch()
