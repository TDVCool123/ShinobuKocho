module.exports = {
    DESCRIPTION: "Mira el ping del bot",
    execute(client, message, args){
        return message.reply(`\`${client.ws.ping}ms\``);
    }
}

