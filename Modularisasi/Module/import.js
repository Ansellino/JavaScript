// Mengimpor Variable

/*
import { name, favoriteFood } from "./module.mjs"

console.log(name); // Output: "Dicoding"
console.log(favoriteFood); // Output: ["pizza", "pasta", "sushi"]
*/

// Mengimpor Function

import { name, favoriteFood as Food, sayHi } from "./module.js";

console.log(name); // Output: "Dicoding"
console.log(Food); // Output: ["pizza", "pasta", "sushi"]
sayHi(name); // Output: "Hi, Dicoding!"

// Mengimpor seluruh nilai yang ada di module tersebut, gunakan keyword * dan alias module tersebut dengan as

import * as user from "./module.js";
console.log(user.name); // Output: "Dicoding"
console.log(user.favoriteFood); // Output: ["pizza", "pasta", "sushi"]
user.sayHi(user.name); // Output: "Hi, Dicoding!"
