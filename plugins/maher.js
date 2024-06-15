let handler = async (m, { conn, usedPrefix, command }) => {
		
			await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: ` > *SASUKE TECH* _maher zain♥️_` }, { quoted: m })
	}

handler.help = ['maher']
handler.tags = ['islam']
handler.command = /^(maher)$/i
handler.limit = false

export default handler

const dir = [
'https://telegra.ph/file/629478fded8cef417edc9.mp4',
'https://telegra.ph/file/460855dd1503e6904832e.mp4',
'https://telegra.ph/file/bbf74fb6d8b193928bd6b.mp4',
'https://telegra.ph/file/1c69ec0c083af3354888a.mp4',
'https://telegra.ph/file/fad9b5a981042dd4b1780.mp4',
'https://telegra.ph/file/e5d4a199eecaf87432a8e.mp4',
'https://telegra.ph/file/a740439940f7e24c5f6ba.mp4',
'https://telegra.ph/file/c3a666014dcdc60712386.mp4',
'https://telegra.ph/file/a9c9e50f95fb8d6c61f7a.mp4',
'https://telegra.ph/file/6d75a4cd1c9d6c5fdcace.mp4',
]
