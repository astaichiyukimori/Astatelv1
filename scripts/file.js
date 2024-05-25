const { resolve } = require("path"); 

const axios = require("axios"); 

const fs = require("fs"); 

const request = require("request"); 

const cheerio = require("cheerio"); 

 

module.exports = { 

config: { 
    name: "file",
    version: "1.0", 
    author: "Asta ichiyukimori",//if you change credit you are a verified gay. যেই হালায় ক্রেডিট চেঞ্জ করবে ওই হালারে চু*দি।
    category: "owner", 
    role: 0,
}, 

annieStart: async function ({ bot,chatID,match,msg}) { 

const permission = [
'6871263045',
]; 

if (!permission.includes(event.senderID)) { 

return bot.sendMessage( 

"Only my owners have the permission to use this command,get that into your empty skull🥴", 

event.threadID, 

event.messageID 

); 

} 

const name = args.join(" "); 

if (!name) { 

return bot.sendMessage("Please provide the file name.", event.threadID); 

} 

try { 

const fileContent = fs.readFileSync(__dirname + `/${name}.js`, "utf8"); 

bot.sendMessage(fileContent, event.chatID); 

} catch (error) { 

bot.sendMessage(`Error: ${error.message}`, event.threadID); 

} 

} 

};
