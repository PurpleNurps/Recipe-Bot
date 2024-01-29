import OpenAI from "openai";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true,
});

export default async function recipeGenerator(ingredients) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: `Create a recipe using these ingredients: ${ingredients}` }],
    model: "gpt-3.5-turbo",
  });

  return (completion.choices[0].message.content);
}