function myFunc(...name) {
  console.log("name:", name);
}

myFunc("Rafy", "Fikri", "Arasy"); // Output: name: [ 'Rafy', 'Fikri', 'Arasy' ]

function myFunc2(number, ...name) {
  console.log("number:", number);
  console.log("name:", name);
}

myFunc2("one", "Rafy", "Fikri", "Arasy"); // Output: number: one, name: [ 'Rafy', 'Fikri', 'Arasy' ]

function myFunc3(...name) {
  console.log(name.length);
  console.log("name", name);
}

myFunc3("Rafy", "Fikri", "Arasy"); // Output: 3, name: [ 'Rafy', 'Fikri', 'Arasy' ]

const favorites = ["Nasi Goreng", "Sate", "Rendang", "Soto", "Bakso"];

const [firstFavorite, secondFavorite, ...otherFavorites] = favorites;

console.log(firstFavorite); // Output: Nasi Goreng
console.log(secondFavorite); // Output: Sate
console.log(otherFavorites); // Output: [ 'Rendang', 'Soto', 'Bakso' ]
