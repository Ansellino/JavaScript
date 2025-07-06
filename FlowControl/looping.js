// Looping

const foods = ["Nasi Goreng", "Pasta", "Sate"];

console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);

// For Loop
/*
for (variabel awal; test kondisi; increment) {
  // do something
}
*/

for (let i = 0; i < 5; i++) {
  console.log(`Angka ke-${1} adalah ${i}`);
}

// For In Loop

/*
For in banyak digunakan untuk pengulangan pada object karena ia dapat melakukan iterasi ke seluruh data di dalam objek. Bahkan, ia juga dapat melakukan iterasi ke properti inheritance dari object seperti length. Berikut contoh penggunaan for in.
*/

const person = { name: "Fulan", origin: "Bandung", birthYear: 2024 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}

// For of loop
/*
Kehadiran for of dimulai pada ECMAScript 2015 (ES6). For of berbeda dengan for in. For of lebih sederhana karena kita tidak perlu memikirkan property dan key. Perhatikan contoh berikut.
*/

const names = ["Bebek", "Ayam", "Telur", "Tempe"];

for (const item of names) {
  console.log(item);
}

// While loop
/*
while (condition) 
     statement
*/

let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}`);
  i++;
}

// Do While Loop

let j = 5;

while (j > 0) {
  console.log(`Angka ke-${j} adalah ${j}`);
  j--;
}

// Do While loop
/*
do {
  // do something
}while (condition);
*/

let k = 0;

do {
  console.log(`Angka ke-${k} adalah ${k}.`);
  k++;
} while (k < 5);

// Control Statement
// Break

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// Penggunaan break pada switch case

const number = 1;

switch (number) {
  case 1:
    console.log("Ini 1");
    break;
  case 2:
    console.log("Ini 2");
    break;
  case 3:
    console.log("Ini 3");
    break;
  default:
    console.log("Ini default");
}

// Continue

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
