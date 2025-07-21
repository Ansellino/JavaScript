# 🔗 Penjelasan Callback Chaining - Contoh Pembuatan & Pengantaran Kopi

## 🎯 Apa itu Callback Chaining?

**Callback Chaining** atau **Nested Callbacks** adalah teknik memanggil callback di dalam callback lain, sehingga membentuk rantai (chain) operasi asynchronous yang berurutan.

### 🎭 Analogi Sederhana:

Bayangkan proses di kafe yang lebih lengkap:

1. **Kamu**: "Pak, buatkan saya kopi dan antarkan ke meja saya!"
2. **Pramusaji**: "Baik, saya buat dulu kopinya... (5 detik)"
3. **Pramusaji**: "Kopi sudah siap, sekarang saya antarkan... (2 detik)"
4. **Pramusaji**: "Kopi sudah sampai di meja!"
5. **Kamu**: "Terima kasih, saya minum sekarang!"

## 🔍 Analisis Kode

### 📁 File: `main2.mjs`

```javascript
import { makeCoffee, sendCoffee } from "./coffee2.mjs";

console.log(`Saya memesan kopi di kafe...`);

makeCoffee(() => {
  // ← Callback pertama
  sendCoffee(() => {
    // ← Callback kedua (nested)
    console.log(`Pramusaji memberikan kopi pesanan.`);
    console.log(`Saya mendapatkan kopi dan menghabiskannya.`);
  });
});
```

**Struktur Callback Chaining:**

```
makeCoffee( callback1 )
    ↓
callback1 = () => {
    sendCoffee( callback2 )
        ↓
    callback2 = () => {
        // Final actions
    }
}
```

### 📁 File: `coffee2.mjs`

```javascript
// Fungsi untuk membuat kopi (5 detik)
export function makeCoffee(callback) {
  const estimationTime = 5000; // 5 detik
  const InSecond = Math.ceil(estimationTime / 1000);

  console.log(
    `Mohon menunggu, Pramusaji sedang membuatkan kopi dalam ${InSecond} detik`
  );

  setTimeout(() => {
    console.log(`Pramusaji selesai membuat kopi.`);
    callback(); // ← Memanggil callback pertama
  }, estimationTime);
}

// Fungsi untuk mengantarkan kopi (2 detik)
export function sendCoffee(callback) {
  const estimationTime = 2000; // 2 detik

  console.log(`Pramusaji sedang mengantarkan kopi pesanan...`);

  setTimeout(() => {
    console.log(`Pramusaji sudah sampai ke meja.`);
    callback(); // ← Memanggil callback kedua
  }, estimationTime);
}
```

## 🎪 Step-by-Step Execution

### 1️⃣ **Import dan Pemanggilan Awal**

```javascript
import { makeCoffee, sendCoffee } from "./coffee2.mjs";
console.log(`Saya memesan kopi di kafe...`); // Output pertama
```

### 2️⃣ **Pemanggilan makeCoffee dengan Nested Callback**

```javascript
makeCoffee(() => {
  // ← Callback Level 1
  sendCoffee(() => {
    // ← Callback Level 2 (nested)
    console.log(`Pramusaji memberikan kopi pesanan.`);
    console.log(`Saya mendapatkan kopi dan menghabiskannya.`);
  });
});
```

**Yang terjadi:**

- Callback Level 1 berisi pemanggilan `sendCoffee()`
- Callback Level 2 berisi aksi final (menerima dan minum kopi)
- Kedua callback **belum dijalankan**, hanya disimpan sebagai parameter

### 3️⃣ **Eksekusi makeCoffee (5 detik)**

```javascript
export function makeCoffee(callback) {
  const estimationTime = 5000;
  console.log(`Mohon menunggu, Pramusaji sedang membuatkan kopi dalam 5 detik`);

  setTimeout(() => {
    console.log(`Pramusaji selesai membuat kopi.`);
    callback(); // ← Memanggil Callback Level 1
  }, 5000);
}
```

### 4️⃣ **Callback Level 1 Dipanggil → sendCoffee Dijalankan**

```javascript
// Callback Level 1:
() => {
  sendCoffee(() => {
    // ← sendCoffee dipanggil dengan Callback Level 2
    console.log(`Pramusaji memberikan kopi pesanan.`);
    console.log(`Saya mendapatkan kopi dan menghabiskannya.`);
  });
};
```

### 5️⃣ **Eksekusi sendCoffee (2 detik)**

```javascript
export function sendCoffee(callback) {
  const estimationTime = 2000;
  console.log(`Pramusaji sedang mengantarkan kopi pesanan...`);

  setTimeout(() => {
    console.log(`Pramusaji sudah sampai ke meja.`);
    callback(); // ← Memanggil Callback Level 2
  }, 2000);
}
```

### 6️⃣ **Callback Level 2 Dipanggil (Final Actions)**

```javascript
// Callback Level 2:
() => {
  console.log(`Pramusaji memberikan kopi pesanan.`);
  console.log(`Saya mendapatkan kopi dan menghabiskannya.`);
};
```

## 🕐 Timeline Eksekusi Lengkap

```
⏰ Waktu 0ms:
   📝 "Saya memesan kopi di kafe..."

⏰ Waktu 1ms:
   📝 "Mohon menunggu, Pramusaji sedang membuatkan kopi dalam 5 detik"
   ⏳ setTimeout makeCoffee dimulai (5000ms)

⏰ Waktu 5000ms (5 detik kemudian):
   📝 "Pramusaji selesai membuat kopi."
   🔄 Callback Level 1 dipanggil!
   📝 "Pramusaji sedang mengantarkan kopi pesanan..."
   ⏳ setTimeout sendCoffee dimulai (2000ms)

⏰ Waktu 7000ms (7 detik dari awal):
   📝 "Pramusaji sudah sampai ke meja."
   🔄 Callback Level 2 dipanggil!
   📝 "Pramusaji memberikan kopi pesanan."
   📝 "Saya mendapatkan kopi dan menghabiskannya."
```

## 🎯 Output Program

```
Saya memesan kopi di kafe...
Mohon menunggu, Pramusaji sedang membuatkan kopi dalam 5 detik
(tunggu 5 detik...)
Pramusaji selesai membuat kopi.
Pramusaji sedang mengantarkan kopi pesanan...
(tunggu 2 detik lagi...)
Pramusaji sudah sampai ke meja.
Pramusaji memberikan kopi pesanan.
Saya mendapatkan kopi dan menghabiskannya.
```

**Total waktu:** 7 detik (5 detik buat kopi + 2 detik antar kopi)

## 🔗 Visualisasi Callback Chain

```
main2.mjs
    ↓
makeCoffee( callback1 )
    ↓ (setelah 5 detik)
callback1() {
    sendCoffee( callback2 )
        ↓ (setelah 2 detik lagi)
    callback2() {
        // Final actions
    }
}
```

## 🎪 Perbandingan dengan Versi Sederhana

### 🔄 **Version 1 (Simple):**

```javascript
// main.mjs
makeCoffee(() => {
  console.log("Langsung minum kopi!");
});
```

- 1 langkah: Buat kopi → Minum
- Total waktu: 5 detik

### 🔗 **Version 2 (Chaining):**

```javascript
// main2.mjs
makeCoffee(() => {
  sendCoffee(() => {
    console.log("Minum kopi yang sudah diantarkan!");
  });
});
```

- 2 langkah: Buat kopi → Antar kopi → Minum
- Total waktu: 7 detik

## 💡 Konsep Penting

### 🔥 **Keuntungan Callback Chaining:**

1. **Sequential Operations** 📋

   - Operasi berjalan berurutan
   - Operasi kedua menunggu operasi pertama selesai

2. **Realistic Workflow** 🎯

   - Menggambarkan proses real-world yang bertahap
   - Setiap langkah memiliki waktu dan callback-nya sendiri

3. **Flexible Control Flow** ⚡
   - Bisa menambah langkah baru dengan mudah
   - Setiap langkah bisa memiliki logika berbeda

### ⚠️ **Masalah Callback Chaining (Callback Hell):**

```javascript
// Jika terlalu banyak nested callbacks:
makeCoffee(() => {
  sendCoffee(() => {
    serveCoffee(() => {
      drinkCoffee(() => {
        washCup(() => {
          payBill(() => {
            console.log("Semuanya selesai!");
          });
        });
      });
    });
  });
});
```

**Masalah:**

- ❌ Sulit dibaca (pyramid of doom)
- ❌ Sulit di-debug
- ❌ Sulit di-maintain
- ❌ Error handling yang rumit

## 🚀 Contoh Callback Chaining Lainnya

### 1. **Database Operations**

```javascript
function getUser(id, callback) {
  setTimeout(() => {
    console.log("User data retrieved");
    callback({ id, name: "John" });
  }, 1000);
}

function getUserPosts(user, callback) {
  setTimeout(() => {
    console.log("User posts retrieved");
    callback([{ title: "Post 1" }, { title: "Post 2" }]);
  }, 1000);
}

// Callback chaining:
getUser(123, (user) => {
  getUserPosts(user, (posts) => {
    console.log("User:", user);
    console.log("Posts:", posts);
  });
});
```

### 2. **File Processing**

```javascript
function readFile(filename, callback) {
  setTimeout(() => {
    console.log(`File ${filename} read`);
    callback("file content");
  }, 1000);
}

function processFile(content, callback) {
  setTimeout(() => {
    console.log("File processed");
    callback(content.toUpperCase());
  }, 1000);
}

function saveFile(content, callback) {
  setTimeout(() => {
    console.log("File saved");
    callback("success");
  }, 1000);
}

// Callback chaining:
readFile("data.txt", (content) => {
  processFile(content, (processedContent) => {
    saveFile(processedContent, (result) => {
      console.log("All done:", result);
    });
  });
});
```

## ✅ Solusi Modern untuk Callback Hell

### 🌟 **1. Promises**

```javascript
function makeCoffeePromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Pramusaji selesai membuat kopi.");
      resolve();
    }, 5000);
  });
}

function sendCoffeePromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Pramusaji sudah sampai ke meja.");
      resolve();
    }, 2000);
  });
}

// Menggunakan Promises:
makeCoffeePromise()
  .then(() => sendCoffeePromise())
  .then(() => {
    console.log("Pramusaji memberikan kopi pesanan.");
    console.log("Saya mendapatkan kopi dan menghabiskannya.");
  });
```

### 🚀 **2. Async/Await**

```javascript
async function coffeeProcess() {
  console.log("Saya memesan kopi di kafe...");

  await makeCoffeePromise();
  await sendCoffeePromise();

  console.log("Pramusaji memberikan kopi pesanan.");
  console.log("Saya mendapatkan kopi dan menghabiskannya.");
}

coffeeProcess();
```

## 🎯 Kesimpulan

**Callback Chaining** adalah:

- ✅ Teknik memanggil callback di dalam callback lain
- ✅ Memungkinkan operasi sequential/berurutan
- ✅ Berguna untuk workflow yang bertahap
- ⚠️ Bisa menjadi "Callback Hell" jika terlalu nested

**Dalam contoh kopi:**

- `makeCoffee` → `sendCoffee` → Final actions
- Setiap langkah menunggu langkah sebelumnya selesai
- Total waktu = 5 detik (buat) + 2 detik (antar) = 7 detik

**Best Practice:**

- 📝 Gunakan untuk operasi sederhana (2-3 level maksimal)
- 🚀 Untuk operasi kompleks, gunakan Promises atau Async/Await
- 🧹 Selalu pertimbangkan readability dan maintainability

**Remember:** Callback chaining bagus untuk memahami konsep asynchronous programming, tapi untuk aplikasi real-world, gunakan solusi yang lebih modern! ☕🔗
