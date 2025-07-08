// Menggunakan Module

// Mengekspor Variable

export const name = "Dicoding";
export const favoriteFood = ["pizza", "pasta", "sushi"];

// Mengekspor Function

export const name1 = "John";
export const favoriteFood1 = ["pizza", "pasta", "sushi"];

export function sayHi(name) {
  console.log(`Hi, ${name}!`);
}

// Agar tidak perlu menulis kata kunci export di setiap nilai yang ingin diekspor, Anda dapat mengekspor di akhir berkas seperti berikut.

const name2 = "John";
const favoriteFood2 = ["pizza", "pasta", "sushi"];

function sayHi2(name) {
  console.log(`Hi, ${name}!`);
}

export { name2, favoriteFood2, sayHi2 };

// Nilai yang telah di export tersebut siap digunakan di mana pun.
