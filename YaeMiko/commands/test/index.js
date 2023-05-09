import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('測試')
 .setDescription('test')
 .addUserOption(option => option.setName('user').setDescription('要提醒的使用者'))

export const action = async (ctx) =>{
    const user = ctx.options.getUser('user');
    await ctx.reply(`${user},測試成功啦`);
}
