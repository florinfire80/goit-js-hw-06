// Selecteaza elementul din ul#categories
const categoriesList = document.querySelector("#categories");

// Gaseste toate elementele li.item in ul#categories
const categoryItems = categoriesList.querySelectorAll("li.item");

// Numara si afiseaza numarul categoriilor
console.log("Number of categories:", categoryItems.length);

// Parcurge fiecare articol din categorie și afișeaza titlul și numărul de elemente
categoryItems.forEach((categoryItem) => {
  const title = categoryItem.querySelector("h2").textContent;
  const elementsCount = categoryItem.querySelectorAll("ul li").length;

  console.log(`\nCategory: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
