const { count } = require("console")
const { channelLink } = require("discord.js")
const Discord = require("discord.js")
const { TIMEOUT } = require("dns")

const bot = new Discord.Client({
  intents: [
    "Guilds",
    "GuildMessages",
    "GuildMessageReactions",    
    "MessageContent"
  ]
})


bot.login("MTA3MTQwODIzOTE4ODY0Mzg3MA.G5TeXc.1EWC21lXMyYFb2mZSKHbuwPYxPxnzhbG2gmXXU") 

bot.once('ready', () => {
console.log("Bot is online")   
})

let prefix = ""

bot.on("messageCreate", msg => {
    if (msg.content.startsWith("-key")) {
        if (!msg.member.permissions.has("Administrator")) {
            return msg.reply("You don't have `Administrator` permission.")
        }
        prefix = msg.content.slice(5)
        msg.reply(`Added new key: \`${prefix}\` ✅`)
    }

    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === "modhelp") { //mod commands
        let c = 1
        global.c = c
        if (!msg.member.permissions.has("Administrator")) {
            return msg.reply("You don't have `Administrator` permission.")
        }
        msg.reply("Mod help system activated ✅")
    }
    
    if (command === "ban" && global.c == 1) {
        if (!msg.member.permissions.has("BanMembers")) {
            return msg.reply("You don't have `BanMembers` permission.")
        }
        msg.mentions.members.first().ban()
        msg.reply(`The User <@${msg.mentions.members.first().id}> Is Banned 🛫`)
    }
    if (command === "timeout" && global.c == 1) {
        if (!msg.member.permissions.has("MuteMembers")) {
            return msg.reply("You don't have `Administrator` permission.")
        }
       let min = 60_000
   
       msg.mentions.members.first().timeout(min * 60)
       msg.reply(`The User <@${msg.mentions.members.first().id}> Has Timeouted ⏲️`)

    }
    if (command === "kick" && global.c == 1) {
        if (!msg.member.permissions.has("KickMembers")) {
            return msg.reply("You don't have `Administrator` permission.")
        }
        msg.mentions.members.first().kick()
        msg.reply(`The User <@${msg.mentions.members.first().id}> Is Kicked 🛫`)
    }
    if (command === "load" && global.c == 1) {
        let aaa = 10;
let time = 1_000;

let a =[];
for(let i = 1;i<=aaa;i++){
  let I = 10 - i
  let arr1 = new Array(i).fill("●").join("")
  let arr2 = new Array(I).fill("○").join("")
  a.push(arr1+arr2)
}
(async function(){
let m = await msg.reply(a[0])

let Times = 0;
setInterval(_=>{
  if(Times < aaa){
    m.edit(`> ${a[Times]}`)
    Times++
  }
},time)
})()
    }

    
})    

