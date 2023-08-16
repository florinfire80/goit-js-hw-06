const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Select the ul#ingredients element
const ingredientsList = document.querySelector("#ingredients");

// Loop through each ingredient and create li elements
ingredients.forEach((ingredient) => {
  // Create a new li element
  const listItem = document.createElement("li");

  // Add the "item" class to the li element
  listItem.classList.add("item");

  // Set the text content to the ingredient name
  listItem.textContent = ingredient;

  // Append the li element to the ul#ingredients
  ingredientsList.appendChild(listItem);
});
