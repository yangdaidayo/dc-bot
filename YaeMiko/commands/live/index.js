import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('前瞻直播')
 .setDescription('前瞻直播內容整理')

export const action = async (ctx) =>{
    ctx.reply(`兌換碼:
QBQ2NH6DB4Z9
2SR3PY7CA52V
6A836GNUA52Z
        
卡池:
上半：優菈 可莉
下半：心海 散兵
          
無新的傳說任務
凱亞邀約
           
活動
1.清夏樂園大秘境：活動可得萊伊拉和凱亞造型，這次好像沒有限時地圖？
a.2D解謎遊戲 b.水砲射氣球 c.花靈翻版找遊戲幣 d.戰鬥活動 e.呃...推杯子？
2.傳心同視：用動物視角去尋找東西，回收小動物
3.險途勘探：戰鬥活動
4.冒險家試煉 進階篇：各種闖關活動(收集冒險幣、踢史萊姆足球之類的)
5.七聖召喚：新的模式，有不同特殊規則(應該沒石頭)
    
可莉新造型(小魔女)
七聖召喚大概率新增萬葉
前瞻最後有楓丹城市的一些畫面，且楓丹可以游泳，有海豹、水母，可能是新的角色有露面(兔子獸人)
結論，長草版本(x
    
`)
}
