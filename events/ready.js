const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../ayarlar.json')
const CSGO = require("csgo-api")
const srv = new CSGO.Server('185.193.165.49', '27015')
module.exports = client => {
	const map = srv.getMap();
    
          setInterval(()=>{
            srv.getPlayerCount().then(oyuncu => { srv.getMap().then(map => { client.user.setActivity(`👥 ${oyuncu}/22 Kişi | 🗺️ ${map} `) }) })
            },2000)
  
  setInterval(function() {

}, 2 * 30000);
  
  client.user.setStatus("dnd"); //dnd, idle, online, offline
  
}

console.log