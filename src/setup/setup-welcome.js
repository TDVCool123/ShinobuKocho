const setupSchema = require(`${process.cwd()}/modelos/setup.js`);

module.exports = {
    ALIASES:["setup-welcomes","setup-bienvenida","setup-bienvenidas"],
    DESCRIPCION: "Sirve para crear un sistema de bienvenidas personalizable",
    PERMISOS: ["Administrador"],
    execute(client, message, args){
        console.log(client);
        const canalBienvenidas = message.guild.channels.cache.get(args[0]) || message.mentions.channels.filter(c=> c.guild.id == message.guild.id).first();
        if(!canalBienvenidas) return message.reply("❌ **No se ha encontrado el canal que has especificado!**");
        
        let imagenBienvenida = args[1];
        if(!imagenBienvenida) return message.reply("❌ **Tienes que especificar una imagen de bienvenida!**");

        let mensajeBienvenida = args.slice(2).join("");
        if(!mensajeBienvenida) return message.reply("❌ **Tienes que especificar un mensaje de bienvenida!**");

        setupSchema.findOneAndUpdate({guildID: message.guild.id},{
            bienvenidas: {
                canal: canalNotificaciones.id,
                mensaje: mensajeBienvenida,
                fondo: imagenBienvenida ,
            }
        })
        
        return message.reply({embeds: [
            new Discord.EmbedBuilder().setTitle(`Sistema de bienvenidas activado`)
            .setDescription(`**Canal de Bienvenidas:** ${canalBienvenidas}\n\n**Mensaje de Bienvenida:**\`${mensajeBienvenida}\`\n\n**Imagen de Bienvenida:** [\`Haz Click\`](${imagenBienvenida})`)
            .setColor('Green')
        ]});
    }
}