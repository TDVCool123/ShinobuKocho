module.exports = async client => {
    console.log(`Conectado como ${client.user.tag}`.green);
    if(client?.application?.commands) {
        client.application.commands.set(client.slashArray);
        client.channels.cache.get('1118705037250674779').send("Ara Ara");
        client.channels.cache.get('1118705037250674779').send("Konichiwa");
        console.log(`(/) ${client.slashCommands.size} Comandos Publicados!`.green);
    }
}

