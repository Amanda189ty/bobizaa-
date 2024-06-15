let handler = async (m, { conn, usedPrefix, command }) => {
		
			await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: ` > *SASUKE TECH* _NEYMAR JR🐦‍🔥_` }, { quoted: m })
	}

handler.help = ['Jr']
handler.tags = ['image-edit']
handler.command = /^(Jr)$/i
handler.limit = false

export default handler

const dir = [
'https://telegra.ph/file/e0714128318de429b7806.mp4',
'https://telegra.ph/file/ec1bef3b35a94152e43d7.mp4',
'https://telegra.ph/file/c429f72d588a301286698.mp4',
'https://telegra.ph/file/6db6d6fc7d63e3d662e5f.mp4',
'https://telegra.ph/file/60974a65e150ac90ff158.jpg',
'https://telegra.ph/file/734654e0052b144e6a119.jpg',
'https://telegra.ph/file/c14e9ff04eb4ee816308b.jpg',
'https://telegra.ph/file/1da306e7b8a705d40043c.jpg',
'https://telegra.ph/file/e402965061d67a49f8493.jpg',
'https://telegra.ph/file/4d3c214285fb117058eec.jpg',
'https://telegra.ph/file/dd26fed7a418d0587ca54.jpg',
'https://telegra.ph/file/64898d4b54c2022185baf.jpg',
'https://telegra.ph/file/0fbae21ced8c896984b03.jpg',
'https://telegra.ph/file/761d743374f3addd50a3a.jpg',
'https://telegra.ph/file/6d03004f2f6b56abb293a.jpg',
'https://telegra.ph/file/2bd0fdda8d32cce09bddc.jpg',
'https://telegra.ph/file/bfd39d2838b1d64bd963f.png',
'https://telegra.ph/file/210e63f8cc774ddc3ee1c.jpg',
'https://telegra.ph/file/740b9134389cdcbcf772a.jpg',
'https://telegra.ph/file/5792c81165961ff98dd30.jpg',
'https://telegra.ph/file/ced2875aa3aed7c8daac8.jpg',
'https://telegra.ph/file/21401e448f8aa5acd5547.jpg',
'https://telegra.ph/file/936e649aa92225be6c355.jpg',
'https://telegra.ph/file/ef0547ec057668cab76eb.jpg',
'https://telegra.ph/file/ba2eb3394769647a5dd6f.jpg',
'https://telegra.ph/file/60dcd7027fa043a051bb8.jpg',
'https://telegra.ph/file/39637188217852d7a6f4e.jpg',
'https://telegra.ph/file/9188eff57aa399dc55485.jpg',
'https://telegra.ph/file/3ec005ba04b3f172de6d8.jpg',
'https://telegra.ph/file/8ad93b53dcd51f13571e9.png',
'https://telegra.ph/file/7812fc17fb07dad5c93e0.jpg',
'https://telegra.ph/file/d81a1808bfd3e4db537a0.jpg',
'https://telegra.ph/file/605e5d08f44790dc55493.jpg',
'https://telegra.ph/file/2351259a5fb95087b5b04.png',
'https://telegra.ph/file/292ac78e60a3e93b9fd0c.jpg',
]
