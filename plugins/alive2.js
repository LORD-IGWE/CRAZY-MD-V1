// 𝐁𝐘 𝐂𝐑𝐀𝐙𝐘 𝐃𝐄𝐕 𝐆𝐈𝐕𝐄 𝐂𝐑𝐄𝐃𝐈𝐓:
//𝐖𝐀.𝐌𝐄/24165730123

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "alive",
    react: "🧞",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})



