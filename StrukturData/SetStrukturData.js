const mySet = new Set([1, 2, 3, 4]);
console.log(mySet); // Output: Set(4) { 1, 2, 3, 4 }

// menyimpan nilai di set
const set = new Set();
set.add(1);
set.add("Apple");
set.add(2);
set.add("Banana");

console.log(set); // Output: Set(4) { 1, 'Apple', 2, 'Banana' }

// Mengakses Nilai di set
const set2 = new Set();
set2.add(1);
set2.add(2);

for (const number of set2) {
  console.log(number); // Output: 1, 2
}

// Foreach pada Set
const set3 = new Set();
set3.add(1);
set3.add(2);
set3.add(3);

set3.forEach((value) => console.log(value)); // Output: 1, 2, 3

// Menghapus nilai di set
const set4 = new Set();
set4.add(1);
set4.add(2);
set4.add(3);
set4.delete(2);
console.log(set4); // Output: Set(2) { 1, 3 }