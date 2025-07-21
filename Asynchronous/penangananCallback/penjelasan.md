# 📚 Penjelasan Callback Function - Contoh Pemesanan Kopi

## 🎯 Apa itu Callback Function?

**Callback Function** adalah fungsi yang diberikan sebagai parameter ke fungsi lain, dan akan dipanggil (callback) ketika tugas tertentu selesai dilakukan.

### 🎭 Analogi Sederhana:

Bayangkan kamu pergi ke kafe:

1. **Kamu**: "Pak, buatkan saya kopi!"
2. **Pramusaji**: "Baik, tunggu 5 menit ya. Nanti saya panggil kalau sudah selesai!"
3. **Kamu**: "Oke, saya tunggu di sini."
4. **(5 menit kemudian)**
5. **Pramusaji**: "Kopi sudah siap!" ← Ini adalah **callback**!

## 🔍 Analisis Kode

### 📁 File: `main.mjs`

```javascript
import { makeCoffee } from "./coffee.mjs";

console.log("Saya memesan kopi di kafe...");

makeCoffee(() => {
  // ← Ini adalah CALLBACK FUNCTION!
  console.log("Pramusaji memberikan kopi pesanan.");
  console.log("Saya mendapatkan kopi dan menghabiskannya.");
});
```

### 📁 File: `coffee.mjs`

```javascript
export function makeCoffee(callback) {
  // ← Parameter menerima fungsi callback
  const estimationTime = 5000; // 5 detik

  const InSecond = Math.ceil(estimationTime / 1000);
  console.log(
    `Mohon menunggu, Pramusaji sedang membuatkan kopi dalam ${InSecond} detik...`
  );

  setTimeout(() => {
    console.log(`Pramusaji selesai membuat kopi.`);
    callback(); // ← DI SINI callback function dipanggil!
  }, estimationTime);
}
```

## 🎪 Step-by-Step Execution

### 1️⃣ **Import dan Pemanggilan Awal**

```javascript
import { makeCoffee } from "./coffee.mjs"; // Mengimport fungsi makeCoffee
console.log("Saya memesan kopi di kafe..."); // Output pertama
```

### 2️⃣ **Pemanggilan makeCoffee dengan Callback**

```javascript
makeCoffee(() => {
  console.log("Pramusaji memberikan kopi pesanan.");
  console.log("Saya mendapatkan kopi dan menghabiskannya.");
});
```

**Yang terjadi:**

- Fungsi arrow `() => {...}` dikirim sebagai parameter `callback`
- Fungsi ini **belum dijalankan**, hanya disimpan di parameter

### 3️⃣ **Di Dalam Fungsi makeCoffee**

```javascript
export function makeCoffee(callback) {
  const estimationTime = 5000;
  const InSecond = Math.ceil(estimationTime / 1000); // 5 detik

  // Langsung dijalankan
  console.log(`Mohon menunggu, Pramusaji sedang membuatkan kopi dalam ${InSecond} detik...`);
```

### 4️⃣ **setTimeout - Asynchronous Process**

```javascript
setTimeout(() => {
  console.log(`Pramusaji selesai membuat kopi.`);
  callback(); // ← Callback function akhirnya dipanggil!
}, estimationTime); // Tunggu 5000ms = 5 detik
```

**Yang terjadi:**

- `setTimeout` menunggu 5 detik
- Setelah 5 detik, fungsi di dalam `setTimeout` dijalankan
- `callback()` memanggil fungsi yang tadi dikirim dari `main.mjs`

## 🕐 Timeline Eksekusi

```
⏰ Waktu 0ms:
   📝 "Saya memesan kopi di kafe..."

⏰ Waktu 1ms:
   📝 "Mohon menunggu, Pramusaji sedang membuatkan kopi dalam 5 detik..."
   ⏳ setTimeout dimulai (menunggu 5000ms)

⏰ Waktu 5000ms (5 detik kemudian):
   📝 "Pramusaji selesai membuat kopi."
   🔄 callback() dipanggil!
   📝 "Pramusaji memberikan kopi pesanan."
   📝 "Saya mendapatkan kopi dan menghabiskannya."
```

## 🎯 Output Program

```
Saya memesan kopi di kafe...
Mohon menunggu, Pramusaji sedang membuatkan kopi dalam 5 detik...
(tunggu 5 detik...)
Pramusaji selesai membuat kopi.
Pramusaji memberikan kopi pesanan.
Saya mendapatkan kopi dan menghabiskannya.
```

## 💡 Konsep Penting

### 🔥 **Mengapa Menggunakan Callback?**

1. **Asynchronous Programming** 🔄

   - Program tidak "freeze" saat menunggu
   - Bisa melakukan hal lain sambil menunggu proses selesai

2. **Non-blocking Code** ⚡

   - Kode lain bisa dijalankan sambil menunggu
   - User interface tetap responsive

3. **Event-driven** 🎭
   - Fungsi dipanggil berdasarkan event (dalam hal ini: selesai membuat kopi)

### 🎪 **Cara Kerja Callback**

```javascript
// 1. Fungsi menerima callback sebagai parameter
function doSomething(callback) {
  // 2. Lakukan sesuatu (bisa async)
  setTimeout(() => {
    console.log("Tugas selesai!");
    // 3. Panggil callback ketika selesai
    callback();
  }, 2000);
}

// 4. Berikan fungsi sebagai callback
doSomething(() => {
  console.log("Callback dipanggil!");
});
```

## 🚀 Contoh Callback Lainnya

### 1. **Callback dengan Parameter**

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data from server";
    callback(data); // Kirim data ke callback
  }, 1000);
}

fetchData((result) => {
  console.log("Received:", result); // "Received: Data from server"
});
```

### 2. **Multiple Callbacks**

```javascript
function processOrder(onSuccess, onError) {
  const success = Math.random() > 0.5; // 50% chance

  setTimeout(() => {
    if (success) {
      onSuccess("Order processed successfully!");
    } else {
      onError("Order failed!");
    }
  }, 2000);
}

// Penggunaan
processOrder(
  (message) => console.log("✅", message), // Success callback
  (error) => console.log("❌", error) // Error callback
);
```

### 3. **Callback dalam Array Methods**

```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach menggunakan callback
numbers.forEach((num) => {
  console.log(num * 2);
});

// map menggunakan callback
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter menggunakan callback
const even = numbers.filter((num) => num % 2 === 0);
console.log(even); // [2, 4]
```

## 🎭 Callback Hell dan Solusinya

### ❌ **Callback Hell (Masalah)**

```javascript
makeCoffee(() => {
  serveCoffee(() => {
    drinkCoffee(() => {
      washCup(() => {
        console.log("Semua selesai!");
      });
    });
  });
});
```

### ✅ **Solusi Modern: Promises & Async/Await**

```javascript
// Dengan Promises
makeCoffee()
  .then(serveCoffee)
  .then(drinkCoffee)
  .then(washCup)
  .then(() => console.log("Semua selesai!"));

// Dengan Async/Await
async function coffeeProcess() {
  await makeCoffee();
  await serveCoffee();
  await drinkCoffee();
  await washCup();
  console.log("Semua selesai!");
}
```

## 🎯 Kesimpulan

**Callback Function** adalah:

- ✅ Fungsi yang diberikan sebagai parameter
- ✅ Dipanggil ketika tugas tertentu selesai
- ✅ Memungkinkan asynchronous programming
- ✅ Dasar dari event-driven programming

**Dalam contoh kopi:**

- `makeCoffee` = Pramusaji (yang melakukan tugas)
- `callback` = Pesan "panggil saya ketika selesai"
- `setTimeout` = Waktu pembuatan kopi (5 detik)
- Pemanggilan `callback()` = "Kopi sudah siap!"

**Remember:** Callback memungkinkan kita menulis kode yang tidak "menunggu" secara blocking, sehingga program tetap responsif! ☕🚀
