const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');

const Language = require('../language');
const Lang = Language.getString('weather');
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
  Asena.addCommand({ pattern: 'moment ?(.*)', fromMe: true, desc: '', dontAddCommandList: true }, async (message, match) => {
    const url = `https://docs-jojo.herokuapp.com/api/fml`;
    try {
      const response = await got(url);

      const json = JSON.parse(response.body);

      if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 'MOMENT :' + json.fml, MessageType.text);
    } catch {
      return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
    }
  });
}

else if (Config.WORKTYPE == 'public') {


  Asena.addCommand({ pattern: 'moment ?(.*)', fromMe: false, desc: '', dontAddCommandList: true }, async (message, match) => {
    const url = `https://docs-jojo.herokuapp.com/api/fml`;
    try {
      const response = await got(url);

      const json = JSON.parse(response.body);

      if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 'MOMENT :' + json.fml, MessageType.text);
    } catch {
      return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
    }
  });
}