import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true,
});

export default async function recipeGenerator(ingredients) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: `Create a recipe using these ingredients: ${ingredients}` }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}