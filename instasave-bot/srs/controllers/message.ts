import { Context } from "grammy";
import axios from "axios";
const checkValidUrl=(url:string)=>{
    const regex=/^https:\/\/www\.instagram\.com\/reel\/[A-za-z0-9]+(\/|\?|&|#|$)/
    return regex.test(url)
}

const downloadInstagramReel=async (url:string,ctx:Context)=>{
    const options = {
        method: 'GET',
        url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
        params: {
          url,
        },
        headers: {
          'X-RapidAPI-Key': '1651fbcc17mshbd6e2a165cfd56ep1f1abdjsn10bff9e133d7',
          'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
        }
      };
      try{
const response = await axios.request(options)
await ctx.replyWithVideo(response.data.media,{caption:`${response.data.title}\n\n Downloaded via @Jasurbek_Rakhmatov`})

      }catch(error){
console.log(error);
ctx.reply("Sorry , I couldn't download the video ")
      }
}

const messageController = async (ctx:Context)=>{
    const message=ctx.message?.text as string;
    const isValid= checkValidUrl(message)
    if(isValid){
        await ctx.reply(`We are progressing your request, please wait...`)
        await ctx.replyWithChatAction("upload_video")
await downloadInstagramReel(message,ctx)
    } else{
        await ctx.reply(`We are progressing sent a valid url `)
    }
}

export{messageController}