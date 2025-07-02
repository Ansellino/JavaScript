const id = 123;
let username = "AnselZorro";

console.log(id); // output: 123
console.log("Sebelum diubah: ", username); // output: AnselZorro

username = "Ansel"; // mengubah nilai variabel username
console.log("Setelah diubah: ", username); // output: Ansel

username = "dicodingacademy"; // TypeError: Assignment to constant variable.
console.log("Setelah diubah:", username); // Tidak akan pernah dieksekusi
