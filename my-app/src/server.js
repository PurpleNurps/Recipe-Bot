// // server.js
// import dotenv from 'dotenv';
// import express from 'express';
// import { OpenAI } from 'openai';
// import cors from 'cors';


// dotenv.config();
// const app = express();
// const openai = new OpenAI({apiKey: process.env.REACT_APP_OPENAI_API_KEY});

// // Enable CORS for all routes
// app.use(cors());

// app.post('/api/recipeGenerator', async (req, res) => {
//     console.log("Received request to generate recipe.");
//   const ingredients = req.body.ingredients;
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: `Create a recipe using these ingredients: ${ingredients}` }],
//     model: "gpt-3.5-turbo",
//   });

//   res.json(completion.choices[0]);
// });

// app.listen(5173, () => console.log('Server running on port 5173'));