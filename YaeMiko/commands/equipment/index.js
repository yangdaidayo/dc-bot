import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('聖遺物評分')
 .setDescription('想知道這個聖遺物能用嗎?輸入聖遺物數值吧(無效詞條請輸入0)')
 .addNumberOption(option => 
    option.setName('大生命')
      .setDescription('單次最大值為5.8%')
      .setRequired(true))
  
  .addNumberOption(option => 
    option.setName('大攻擊')
      .setDescription('單次最大值為5.8%')
      .setRequired(true))
  
  .addNumberOption(option => 
    option.setName('大防禦')
        .setDescription('單次最大值為7.3%')
        .setRequired(true))
  
  .addNumberOption(option => 
    option.setName('小攻擊')
        .setDescription('單次最大值為19')
        .setRequired(true))
  
  .addNumberOption(option => 
    option.setName('小生命')
        .setDescription('單次最大值為299')
        .setRequired(true))
  
  .addNumberOption(option => 
    option.setName('小防禦')
      .setDescription('單次最大值為23')
      .setRequired(true))
  
  .addNumberOption(option => 
    option.setName('元素精通')
      .setDescription('單次最大值23')
      .setRequired(true))
    
  .addNumberOption(option => 
    option.setName('元素充能效率')
      .setDescription('單次最大值為6.5%')
      .setRequired(true))
    
  .addNumberOption(option => 
    option.setName('暴擊率')
      .setDescription('單次最大值為3.9%')
      .setRequired(true))

  .addNumberOption(option => 
    option.setName('爆擊傷害')
      .setDescription('單次最大值為7.8%')
      .setRequired(true))

export const action = async (ctx) =>{
    const HP = ctx.options.getNumber('大生命')
    const ATK = ctx.options.getNumber('大攻擊')
    const DEF = ctx.options.getNumber('大防禦')
    const atk = ctx.options.getNumber('小攻擊')
    const hp = ctx.options.getNumber('小生命')
    const def = ctx.options.getNumber('小防禦')
    const EM = ctx.options.getNumber('元素精通')
    const ER = ctx.options.getNumber('元素充能效率')
    const CR = ctx.options.getNumber('暴擊率')
    const CD = ctx.options.getNumber('爆擊傷害')

    const score = parseFloat((HP/5.8)+(ATK/5.8)+(DEF/7.3)+(atk/19/3)+(hp/299/3)+(def/23/3)+(EM/23)+(ER/6.5)+(CR/3.9)+(CD/7.8)).toFixed(2)
    if (score==9){
      await ctx.reply(`分數為 ${score}
滿分聖遺物，小傢伙，出門小心`)
    }
    if (7<=score && score<9){
      await ctx.reply(`分數為 ${score}
這件聖遺物大畢業了，但記得各項數值要配平喔`)
    }
    if (5<=score && score<7){
      await ctx.reply(`分數為 ${score}
這件聖遺物基本畢業了，可以考慮是要繼續提升或是刷其他的`)
    }
    if (3<=score && score<5){
      await ctx.reply(`分數為 ${score}
這件聖遺物勉強能過渡用吧，加油，祝你早日出貨`)
    }
    if (0<=score && score<3){
      await ctx.reply(`分數為 ${score}
這件聖遺物當肥料吧`)
    }
    if (score<0){
      await ctx.reply(`分數為 ${score}
這件聖遺物不可能存在，檢查看看是不是數值打錯了`)
    }
    if (score>9){
      await ctx.reply(`分數為 ${score}
這件聖遺物不可能存在，檢查看看是不是數值打錯了`)
    }
}
