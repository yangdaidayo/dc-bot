import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('活動')
 .setDescription('當前的活動')

export const action = async (ctx) =>{
    ctx.reply(`小傢伙，來看看現在有甚麼活動吧
(皆已按照活動順序，開始時間為早上10點，結束時間薇凌晨3:59)
決鬥!召喚之巔:進行中(5/25/開始 6/19結束)
神巧天工‧寶錄之章:(6/8/開始 6/19結束)
離垢者肅心旅宴:(?/?開始 ?/?結束)
溢神的猜想:(?/?開始 ?/?結束)
深淵:已更新
Twitch掉寶:已開啟(6/13結束)
活動連結:https://www.twitch.tv/drops/inventory
網頁活動:Null
活動連結:Null
前瞻直播:5/13 20:00`)
}
