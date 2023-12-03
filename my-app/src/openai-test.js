import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const ingredients = "carrots, coconut oil, kale, lentils, onion, potatoes, salt, vegetable broth, water";

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: `Create a recipe using these ingredients: ${ingredients}` }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
