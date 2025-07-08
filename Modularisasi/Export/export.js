// Export
/*
Export adalah keyword yang kita gunakan untuk melabeli suatu function/method/variable agar dapat diakses dari luar modul saat ini. Export terdiri dari dua jenis, yaitu default export dan named export. Perhatikan contoh named export berikut ini.
*/

import goodMorning from "./anotherfile.mjs";
import anotherName from "./anotherfile.mjs";

goodMorning(); // Output: "Selamat Pagi"
anotherName(); // Output: "Selamat Pagi"

// Contoh named export dan default export

import sayHi, { sayGoodBye } from "./anotherfile1.js";
sayHi(); // Output: "Hai, ini default export dari anotherfile1.js"
sayGoodBye(); // Output: "Bye, ini named export dari anotherfile1.js"
