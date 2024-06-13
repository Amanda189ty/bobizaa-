import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw '*_أكتب نص مع هاذا الأمر لإنشاء لوغو_*\n\n *مثال الإستخدام*\n .logo10 SASUKE'
  m.reply('*_جارى إنشاء لوغو لك قريبا ..._*')
  let res = `https://api.tiodevhost.my.id/api/photooxy/illuminated-metallic?text=${response[0]}`
  conn.sendFile(m.chat, res, 'iluminated.jpg', `> *_SASUKE TECH LOGO_★ಠᴥಠ*`, m, false)
}
handler.help = ['logo10'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logo10)$/i

export default handler
