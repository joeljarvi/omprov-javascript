// 2. Medelvärdet (3p)
// Skriv en funktion average som returnerar medelvärdet av en array med siffror.
// Medelvärdet räknas ut genom att först räkna ut summan av siffrorna och sen
// dela det med antalet siffror. medelvärdet = summan / antal.

// function average(numbers) {
//   let sum = 0;
//   let totalAverage = 0;

//   //räkna igenom arrayen
//   for (let i of numbers) {
//     sum = sum + i;
//     totalAverage = sum / numbers.length;
//   }

//   return totalAverage;
// }

// let average = numbers
//   .map((c, i, arr) => c / arr.length)
//   .reduce((p, c) => c + p);

let total = 0;
numbers.forEach(function (number) {
  total += number;
});
console.log(total / numbers.length);

console.log(average([1, 2, 3, 4, 5])); // Ska logga 3
console.log(average([1, 2, 3, 4])); // Ska logga 2.5
