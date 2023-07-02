<div align="center">
 <a href="https://discord.gg/MBPsvcphGf" target="_blank"><img src="https://img.shields.io/maintenance/yes/2023?style=for-the-badge&label=MANTENIDO" /></a>
 <a href="https://discord.gg/MBPsvcphGf" target="_blank"><img src="https://img.shields.io/discord/879397504075063297?color=blue&label=soporte&style=for-the-badge&logoColor=white" /></a>
 <a href="https://www.postgresql.org" target="_blank"><img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/></a>
 <a href="https://www.nodejs.org" target="_blank"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/></a>
</div>

# Handler Bot de Discord | V14 

# 📋 Tabla de Contenidos

- [Handler Bot de Discord | V14](#handler-bot-de-discord--v14)
- [📋 Tabla de Contenidos](#-tabla-de-contenidos)
  - [✍ Configuración](#-configuración)
    - [☑️ Requisitos](#️-requisitos)
    - [📋 Instalación](#-instalación)
    - [⚙️ Configuración](#️-configuración)
    - [Creación de Comandos](#-creación-de-comandos)
      - [💬 Comandos de Prefijo](#-comandos-de-prefijo)
      - [(/) Comandos Slash](#-comandos-slash)
  - [💪 Características](#-características)
  - [💛 Contribuciones](#-contribuciones)
  - [🔰 Soporte](#-soporte)

## ✍ Configuración
### ☑️ Requisitos
- Crear un bot en el [Portal de Developers de Discord](https://discord.com/developers/applications) y activarle los intentos de: Contenido de Mensaje **(obligatorio)**, Miembros de Servidores y Presencia **(opcionales)**.
- Tener [NodeJS](https://nodejs.org) instalado en el equipo.

### 📋 Instalación
```git
git clone https://github.com/dewstouh/handler-v14
npm install
```

### ⚙️ Configuración
Crear un archivo `.env` e introduce los datos que se solicitan para el funcionamiento del bot.

*⚠️ NUNCA compartas el contenido de tu `.env` con nadie*

```
BOT_TOKEN = "El Token de tu Bot"

PREFIX = "Prefijo del Bot"
STATUS = "Texto de Estado del Bot"
STATUS_TYPE = "Tipo de Estado"
LANGUAGE = "Idioma por defecto del Bot"
COLOR = "el color del embed (HEX)"
OWNER_IDS = "La ID de los propietarios del bot separado con espacios"
```

Cuando tengas el bot configurado y con sus módulos instalados, puedes encenderlo usando ```node .```

### 🔨 Creación de Comandos
#### 💬 Comandos de Prefijo
En el contenido de `/src/comandos`, podrás encontrar las categorías de los comandos, para crear una categoría, es tan sencillo como crear una carpeta dentro de esta ruta, por ejemplo:

- `/src/comandos/Prueba`

Para crear comandos dentro de esta categoría, tendrás que crear un archivo con el nombre del comando con formato `.js`, por ejemplo:

- `/src/comandos/Prueba/ping.js`

Después, tendrás que crear la estructura (objeto) del comando con la siguiente plantilla:

```js
module.exports = {
    DESCRIPTION: "Sirve para ver el ping del bot", //descripción del comando
    ALIASES: ["botping", "pingbot"] //alias del nombre del comando
    PERMISSIONS: ["Administrator", "KickMembers", "BanMembers"] //permisos que necesitará el usuario para ejecutar el comando
    BOT_PERMISSIONS: ["Administrator", "KickMembers", "BanMembers"] //permisos que necesitará el bot para ejecutar el comando
    OWNER: true, //Solo los dueños del bot podrán ejecutar el comando
    execute(client, message, args, prefix, GUILD_DATA){
        //ejecución del comando
        return message.reply(`\`${client.ws.ping}ms\``);
    }
}
```

⌚ No es necesario especificar el nombre del comando. El nombre del comando será igual al nombre del archivo.

Para ejecutar el comando que hayamos creado, es tan sencillo como ejecutar en nuestro bot `<Prefijo>ping`

*⚠️ Si creas dos comandos con el mismo nombre, el bot solo ejecutará uno de ellos. ⚠️*
#### (/) Comandos Slash
En el contenido de `/src/slashCommands`, podrás encontrar las categorías de los comandos:

- `/src/slashCommands/Prueba`

Para crear comandos dentro de esta categoría, tendrás que crear un archivo con el nombre del comando con formato `.js`, por ejemplo:

- `/src/slashCommands/Prueba/ping.js`

Después, tendrás que crear la estructura (objeto) del comando con la siguiente plantilla:

```js
const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    CMD: new SlashCommandBuilder()
    .setDescription("Sirve para ver el ping del bot"), //descripción del comando
    //puedes encontrar más métodos en https://discordjs.guide/creating-your-bot/slash-commands.html

    PERMISSIONS: ["Administrator", "KickMembers", "BanMembers"] //permisos que necesitará el usuario para ejecutar el comando
    BOT_PERMISSIONS: ["Administrator", "KickMembers", "BanMembers"] //permisos que necesitará el bot para ejecutar el comando
    OWNER: true, //Solo los dueños del bot podrán ejecutar el comando
    execute(client, interaction, prefix, GUILD_DATA){
        //ejecución del comando
        return interaction.reply(`\`${client.ws.ping}ms\``);
    }
}
```

⌚ No es necesario especificar el nombre del comando. El nombre del comando será igual al nombre del archivo.

Para ejecutar el comando que hayamos creado, es tan sencillo como ejecutar en nuestro bot `/ping`

*⚠️ Si creas dos comandos con el mismo nombre, el bot solo ejecutará uno de ellos. ⚠️*

## 💪 Características

- ✅ Organizado
- ✅ Comandos Slash y Comandos de Prefijo
- ✅ Recarga el bot sin tener que reiniciar, evitando posibles spams a la API de Discord
