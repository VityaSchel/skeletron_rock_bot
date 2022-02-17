import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api'

const token = process.env.TELEGRAM_BOT_API_TOKEN
const bot = new TelegramBot(token, { polling: true })

const fileIds = {
  startMusic: process.env.START_MUSIC_FILE_ID,
  endMusic: process.env.END_MUSIC_FILE_ID
}

bot.onText(/^скелет$/i, async msg => {
  bot.sendVoice(msg.chat.id, fileIds.startMusic)
  await new Promise(resolve => setTimeout(resolve, 1700))

  bot.sendMessage(msg.chat.id, 'СКАЖИИИИИИ')
  await new Promise(resolve => setTimeout(resolve, 1400))

  bot.sendMessage(msg.chat.id, 'ФОНТАН')
})

bot.onText(/^фонтан$/i, async msg => {
  bot.sendMessage(msg.chat.id, 'ТВОИ ТРУСЫ ВОН ТАМ')
  await new Promise(resolve => setTimeout(resolve, 200))

  bot.sendMessage(msg.chat.id, 'АХАХАХАХХХАВХАХХВААВАЗХХВАХЗХЗАХЗХЗХЗАЫВЛ')
  await new Promise(resolve => setTimeout(resolve, 100))

  bot.sendVoice(msg.chat.id, fileIds.endMusic)
})