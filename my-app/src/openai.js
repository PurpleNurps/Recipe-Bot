// require('dotenv').config();
// import OpenAI from "openai";

// const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

// const openai = new OpenAI({
//   apiKey,
//   dangerouslyAllowBrowser: true,
// });

// async function recipeGenerator(ingredients) {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: `Create a recipe using these ingredients: ${ingredients}` }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }

// export default await recipeGenerator();