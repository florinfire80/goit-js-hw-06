const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Selecteaza elementul ul#ingredients
const ingredientsList = document.querySelector("#ingredients");

// Parcurge fiecare ingredient și creaza elemente li
ingredients.forEach((ingredient) => {
  // Creaza un nou element li
  const listItem = document.createElement("li");

  // Adauga clasa "item" la elementul li
  listItem.classList.add("item");

  // Seteaza continutul text la numele ingredientului
  listItem.textContent = ingredient;

  // Adauga elementul li la ul#ingredients
  ingredientsList.appendChild(listItem);
});
