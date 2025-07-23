Tahukah Anda bahwa kita bisa saja terjebak kepada callback hell lagi meskipun memanfaatkan Promise sebagai penanganannya? Berikut buktinya.

```js
makeCoffee(order).then((value) => {
  sendCoffee(value).then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  });
});
```

Walaupun tetap berjalan dengan baik, kode di atas akan berpotensi terjebak pada callback hell. Makin banyak proses asinkron berikutnya maka kode makin menjorok ke dalam. Jadi, silakan manfaatkan chaining method untuk mengatasi ketergantungan proses ini.

Pastikan kita mengembalikan nilai Promise-nya (return) jika memanfaatkan chaining method. Hal ini karena then akan berjalan jika menemukan objek Promise.

```js
makeCoffee(order)
  .then((value) => {
    sendCoffee(value); // <-- tidak akan dilanjutkan ke then berikutnya.
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.log(error.message);
    throw error;
  });
```

Contoh kode di atas akan berhenti sampai then pertama saja. Oleh karena itu, pastikan kembalikan nilai Promise-nya, ya.

```js
makeCoffee(order)
  .then((value) => {
    return sendCoffee(value); // <-- akan dilanjutkan ke then berikutnya.
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.log(error.message);
    throw error;
  });
```

Mantap! Kode kita makin enak dibaca dengan adanya Promise. Anda ingin penulisan kode yang lebih enak lagi? Mari kita pelajari async-await dalam materi berikutnya.
