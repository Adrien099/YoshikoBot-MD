let handler = async (m, { conn, command, usedPrefix }) => {
let pp = ``
let stafftxt = `🏆 *EQUIPO DE AYUDANTES*
🥷 *Bot:* ${global.botname}
☁️ *Versión:* ${global.vs}

👑 *Propietario:*

• OfcDiego
☘️ *Rol:* Propietario
✨️ *Número:* ${creador}
🏆 *GitHub:* https://github.com/OfcDiego

💫 *Colaboradores:*

• ArizzVal
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/5215610314499
🏆 *GitHub:* https://github.com/ArizzVal

• elrebelde21
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/573147616444
🏆 *GitHub:* https://github.com/elrebelde21

• AzamiJs
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/5214434703586
🏆 *GitHub:* https://github.com/AzamiJs

• Alba070503
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/59169082575
🏆 *GitHub:* https://github.com/Alba070503

• Danixl.Js
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/595983799436
🏆 *GitHub:* https://github.com/Danixl.Js`
await conn.sendFile(m.chat, pp, 'yoshi.jpg', stafftxt.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developer 👑`,
body: `💭 Staff Oficial`,
mediaType: 1,
sourceUrl: redesYoshi,
thumbnailUrl: ''
}}
}, { mentions: m.sender })

}
handler.help = ['colaboradores']
handler.command = ['colaboradores']
handler.register = true
handler.tags = ['info']
