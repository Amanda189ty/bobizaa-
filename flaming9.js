import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw '*_أكتب نص مع هاذا الأمر لإنشاء لوغو_*\n\n *مثال الإستخدام*\n .logo8 SASUKE TECH'
  m.reply('*_جارى إنشاء لوغو لك قريبا ..._*')
  let res = `https://api.tiodevhost.my.id/api/photooxy/picture-of-love?text=${response[0]}`
  conn.sendFile(m.chat, res, 'pictlove.jpg', `> _SASUKE TECH LOGO_`, m, false)
}
handler.help = ['logo8'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logo8)$/i

export default handler
