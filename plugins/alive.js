const {cmd , commands} = require('../command')

cmd({
    pattern: ".alive",
    desc: "about",
    react: "❕",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
╒✦•··············•••••••••··············•··•✦
*වික්ශිප්ත ආකාසත් කියනවා විටෙක දුක්බර කතාවක්🌥️.*

*කදුලු ලෙස වැටෙනවා නොව්ව් ද එහි විඩාවත්🌧️.*

*දාරාන තවමත් ප්‍රේම කරනවා නොවෙනස්  සූරියකාන්තත්🌻.*

*කොච්චර රිදුනත් බලාන ඉන්නවා තවටත් සූර්යයා දිහාත් 🌞.*

*_පතොකුත් විටෙකදී ඉල්ලනවා නොවෙද* 
*සැනසිමට වැහි බින්දුත් 🌵.*

*වැස්සත් දන්නවා බලාන ඉන්නවමයි කියන්න පතොකුත් 🌧️🌵.*

*හරියට අපි වගේමයි ස්වභාව ධර්මයත් 😊.*
 
*ආදරයෙන් බලාන ඉන්න හැමෝම දවසක එකතු වෙන්න ඕනි ඒක මගෙ පුන්චි *ප්‍රාර්ථනාවක්.ආදරයට හරි ආදරයෙන් 💐❤️.*

*ස්තූතිය....!*

*@CREATE BY LAKSIDU NIMSARA*

> QUEEN-ISHU-MD
`
return await conn.sendMessage(from,{image: {url: `https://i.imgur.com/LTVGRX8.jpeg`},caption: desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
