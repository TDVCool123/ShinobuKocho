const {discord} = require("discord.js");
const got = require("got");//uso got por k zi

module.exports = {
  category: "memes",
  DESCRIPTION: "manda memes :v",
  usage: "memes",
  botPerms: ["EmbedLinks"],
  run: async (client, message, args) => {
    try {
      
      let reddit = ["https://www.reddit.com/r/MemesESP/random.json", 'https://www.reddit.com/r/SpanishMeme/random.json']

      let re = reddit[Math.floor(Math.random() * reddit.length)]

      got(re)
        .then((response) => {
          let content = JSON.parse(response.body);
          nt = JSON.parse(response.body);
          let title = content[0].data.children[0].data.title;
          let meme = content[0].data.children[0].data.url;
          let ee = new discord.EmbedBuilder()
            .setDescription(`**${title}**`)
            .setImage(meme)
            .setColor("Random");
          message.channel.send({ embeds: [ee] });
        })
        .catch(console.error);
    } catch (err) {
      const errorsitos  = client.channels.cache.get("1040078451849318430"); //pone un canal de tu servidor ._.

      let error = new EmbedBuilder().setTitle(`El usuario ${message.author.tag} tiene problemas :v`).setDescription(`Error en ${message.guild.name} error: ${err}`)


      errorsitos.send({embeds: [error]});
    }
  },
};