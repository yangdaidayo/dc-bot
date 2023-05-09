import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('活動')
 .setDescription('當前的活動')

export const action = async (ctx) =>{
    ctx.reply(`小傢伙，來看看現在有甚麼活動吧
(皆以按照活動順序)
合劑演進:已結束(4/13開始)
風沙轟鳴:已結束(4/21開始)
盛典與慧業:進行中(4/27開始)
精通移湧:進行中(未知，推測為5/3左右開始)
深淵:已更新
Twitch掉寶:Null
活動連結:Null
網頁活動:Null
活動連結:Null
前瞻直播:未知`)
}
