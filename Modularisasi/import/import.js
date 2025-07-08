// Import
/*
JavaScript memungkinkan kita untuk menggunakan function/method dari modul lainnya dengan dua syarat: 
- Harus meng-import function/method tersebut.
- Function/method tersebut sudah di-export (export akan dibahas di materi selanjutnya).
Import dapat dilakukan dengan menulis kata kunci import kemudian diikuti oleh nama function/method/variable. Perhatikan contoh berikut ini.
*/

/* anotherfile.mjs
export default function myFunction() {
  console.log("Ini adalah function export default.");
}
*/

// main.mjs
import myFunction from "./anotherfile.mjs";

myFunction(); // Output: "Ini adalah function export default."

// anotherfile1.mjs

/*
export function myFunction() {
  console.log('Ini adalah contoh named import.');
}
*/

// main1.mjs
import { myFunction1 } from "./anotherfile1.mjs";
myFunction1(); // Output: "Ini adalah contoh named import."

// anotherfile2.mjs
/*
const name = 'John';
const email = 'john@gmail.com';
const age = 30;

export { name, email, age };
*/

// main2.mjs
import { name, email, age } from "./anotherfile2.mjs";
console.log(name); // Output: "John"
console.log(age); // Output: 30

// anotherfile3.mjs
/*
const name = 'John';
const email = 'john@gmail.com';
const age = 30;

export { name, email, age };
*/

// main3.mjs
import * as variable from "./anotherfile3.mjs";

console.log(variable.name); // Output: "John"
console.log(variable.email); // Output: "john@gmail.com"
console.log(variable.age); // Output: 30

// customer.mjs
/*
export function myFunction() {
  console.log("Ini dari customer.js");
}
*/

// user.mjs
/*
export function myFunction() {
  console.log("Ini dari user.js");
}
*/

// main4.mjs
import { myFunction as customerFunction } from "./customer.js";
import { myFunction as userFunction } from "./user.js";

userFunction(); // Output: "Ini dari user.js"
customerFunction(); // Output: "Ini dari customer.js"
