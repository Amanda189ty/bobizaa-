import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw '*_أكتب نص مع هاذا الأمر لإنشاء لوغو_*\n\n *مثال الإستخدام*\n .logo2 SASUKE TECH'
  m.reply('*_جارى إنشاء لوغو لك قريبا ..._*')
  let res = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `> _SASUKE TECH LOGO_`, m, false)
}
handler.help = ['logo2'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logo2)$/i

export default handler
