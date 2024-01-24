// // client.js
// export default async function recipeGenerator(ingredients) {
//   const response = await fetch("http://localhost:5173/api/recipeGenerator", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ ingredients }),
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const recipe = await response.json();
//   console.log(recipe);
// }
