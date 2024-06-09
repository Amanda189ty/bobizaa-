import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
|😊 مرحبا يا , ${conn.getName(m.sender)}!
│🌼🤍 أتمنى أنك بخير 💜✨ أنا على قيد الحياة
╰────────────────────
*─[ ❀ꪑꪖ𝘳ᧁꪖ𝘳𝓲𝓽ꪖ✾  ]*🌟✨
`.trim()
  m.reply(caption)
}
handler.help = ['مارغاريتا']
handler.tags = ['infobot']
handler.command = /^(مارغاريتا)$/i


export default handler
