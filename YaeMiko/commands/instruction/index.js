import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('聖遺物評分使用說明')
 .setDescription('使用前記得看一下')

export const action = async (ctx) =>{
    ctx.reply(`評分公式:聖遺物數值/單次詞條最大值
最後再將個數值加總，獲得該聖遺物的分數，滿分9分
(其中小攻擊、小生命、小防禦的分數會再/3)
使用方法:請輸入該角色的有效詞條，無效詞條請輸入0
該角色有效詞條是甚麼。可參考各大攻略與自己個人理解
適用範圍:主c與副c
奶媽、輔助或是不太吃雙爆的c不太適用
冰套角色也請考慮到爆擊率溢出的問題
最後，聖遺物分數"僅供參考"
分數高，傷害也不見得高
傷害受隊友、怪物抗性等因素影響
選擇聖遺物時，不要太執著於分數`)
}
