import { makeCoffee } from "./coffee.mjs";

console.log("Saya memesan kopi di kafe.");

makeCoffee();

console.log("Pramusaji memberikan kopi pesanan.");
console.log("Saya mendapatkan kopi dan menghabiskannya.");

/*
Ekspektasi yang kita miliki adalah output dengan urutan berikut.

- Saya memesan kopi di kafe.
- Mohon menunggu. Pramusaji sedang membuatkan kopi dalam 5 detik.
- Pramusaji selesai membuat kopi.
- Pramusaji memberikan kopi pesanan.
- Saya mendapatkan kopi dan menghabiskannya.
*/
