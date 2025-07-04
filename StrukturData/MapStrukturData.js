// Membuat Map
const productMap = new Map([
  ["shoes", 500],
  ["shirt", 300],
  ["hat", 150],
]);

console.log(productMap); // Output: Map(3) { 'shoes' => 500, 'shirt' => 300, 'hat' => 150 }

// Menyimpan Nilai di Map
const map = new Map();
map.set("name", "aras");
console.log(map); // Output: Map(1) { 'name' => 'aras' }

// menggunakan string sebagai key
const map2 = new Map();
map2.set(1, "number one");
console.log(map2); // Output: Map(1) { 1 => 'number one' }

// Mengakses Nilai di Map
const map3 = new Map();
map3.set("name", "aras");
console.log(map3.get("name")); // Output: aras

// Menghapus Nilai di Map
const map4 = new Map();
map4.set("name", "aras");
map4.set("last name", "arasy");
map4.delete("last name");
console.log(map4); // Output: Map(1) { 'name' => 'aras' }
