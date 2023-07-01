module.exports = {
    DESCRIPTION: "Shinobu te saluda",
    execute(client, message){
        const img = new client.MessageAttachment('https://www.hamilton-medical.com/.imaging/stk/hamilton-theme/text-backgroundimage-tablet/dam/Images/A-Pictures/Home/covid-19-header-2000x769.jpg/jcr:content/covid-19-header-2000x769.jpg.2020-03-20-09-55-30.jpg')
        return message.channel.send(img);
       // return message.reply(`\`${client.ws.ping}ms\``);
    }
}

/*if(command === 'covid'){
    
  }*/
  