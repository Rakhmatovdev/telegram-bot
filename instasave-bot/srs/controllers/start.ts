import { Context } from "grammy";

const startController = async (ctx: Context) => {
  await ctx.reply(`<b>Welcome</b>, you entered start command ${ctx.message?.from.first_name}`, {
    parse_mode: "HTML",
  });
};

export { startController };
