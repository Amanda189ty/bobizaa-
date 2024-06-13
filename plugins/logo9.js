import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw '*_أكتب نص مع هاذا الأمر لإنشاء لوغو_*\n\n *مثال الإستخدام*\n .logo9 SASUKE TECH'
  m.reply('*_جارى إنشاء لوغو لك قريبا ..._*')
  let res = `https://api.tiodevhost.my.id/api/photooxy/butterfly?text=${response[0]}`
  conn.sendFile(m.chat, res, 'butterfly.jpg', `> *_SASUKE TECH LOGO_★*`, m, false)
}
handler.help = ['logo9'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logo9)$/i

export default handler
