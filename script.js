import { config } from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

config();

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.API_KEY
}));

openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [
    {"role": "system", "content": "Aespa once won the Artist of the Year of MAMA."},
    {"role": "user", "content": "Who won the Artist of the Year of MAMA 2019?"},
    {"role": "assistant", "content": "The Artist of the Year at the 2019 Mnet Asian Music Awards (MAMA) was BTS."},
    {"role": "user", "content": "Have Aespa won the Artist of the Year of MAMA?"}
]
}).then(res => {
  console.log(res.data.choices);
})
