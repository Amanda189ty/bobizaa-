import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw '*_أكتب نص مع هاذا الأمر لإنشاء لوغو_*\n\n *مثال الإستخدام*\n .logo4 SASUKE TECH'
  m.reply('*_جارى إنشاء لوغو لك قريبا ..._*')
  let res = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `> _SASUKE TECH LOGO_`, m, false)
}
handler.help = ['logo4'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logo4)$/i
export default handler
