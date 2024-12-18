// 3. Filtrera frukt (3p)
// Skriv en funktion removeApples som tar bort alla "apple" ur arrayen
// och returner den nya arrayen.

function removeApples(fruits) {
  const apple = "apple";

  fruits.filter(apple);

  return fruits - apple;
}

console.log(removeApples(["apple", "banana", "orange", "apple"])); // ska logga ["banana", "orange"]

// eller kanske:

function removeApples(fruits) {
  const apple = "apple";
  const banana = "banana";
  const orange = "orange";

  const goodFruits = banana + orange;
  return goodFruits;
}
