# ⚠️ Error Callback - Menangani Kesalahan dalam Asynchronous Programming

## 🎯 Apa itu Error Callback?

**Error Callback** adalah pola dalam JavaScript untuk menangani kesalahan (error) yang mungkin terjadi selama operasi asynchronous. Mengikuti konvensi **"Error-First Callback"** dimana parameter pertama adalah error, parameter kedua adalah data.

### 🎭 Analogi Sederhana:

Bayangkan kamu pesan kopi di kafe:

- 🎯 **Normal**: "Kopi berhasil dibuat!"
- ❌ **Error**: "Maaf, mesin kopi rusak!"
- 📋 **Callback**: Pramusaji memberitahu hasil (sukses/gagal)

## 📁 File Structure

```
ErrorCallback/
├── coffee.mjs     # Simulasi pembuatan kopi dengan kemungkinan error
├── main.mjs       # Demo callback chaining + error handling
├── main2.mjs      # Demo file reading + error handling
├── sample.txt     # File template untuk dibaca
└── penjelasan.md  # Dokumentasi ini
```

## 🔍 Analisis File

### ☕ coffee.mjs - Simulasi Error dengan Random

```javascript
export function makeCoffee(name, callback) {
  const estimationTime = 5000;
  let isSuccess = false;

  setTimeout(() => {
    // Simulasi 70% sukses, 30% error
    const number = Math.random();
    if (number > 0.3) {
      isSuccess = true;
    }

    if (!isSuccess) {
      callback(new Error("Gagal membuat kopi nich.."), null); // ❌ Error case
      return;
    }

    console.log("Pramusaji selesai membuat kopi.");
    callback(null, name); // ✅ Success case
  }, estimationTime);
}

export function sendCoffee(name, callback) {
  const estimationTime = 2000;
  let isSuccess = false;

  console.log("Pramusaji sedang mengantarkan kopi pesanan...");

  setTimeout(() => {
    // Simulasi 70% sukses, 30% error untuk pengantaran
    const number = Math.random();
    if (number > 0.3) {
      isSuccess = true;
    }

    if (!isSuccess) {
      callback(new Error("Gagal mengantarkan kopi..."), null); // ❌ Error case
      return;
    }

    console.log("Pramusaji sudah sampai ke meja.");
    callback(null, name); // ✅ Success case
  }, estimationTime);
}
```

**Key Points:**

- 🎲 `Math.random()` untuk simulasi error
- ❌ `callback(error, null)` ketika gagal
- ✅ `callback(null, data)` ketika sukses

### 🎪 main.mjs - Callback Chaining dengan Error Handling

```javascript
import { makeCoffee, sendCoffee } from "./coffee.mjs";

const order = "Kopi Espresso";
console.log(`Saya memesan ${order} di kafe buxsel`);

makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
  if (makeCoffeeError) {
    console.error(makeCoffeeError); // ❌ Handle error dari makeCoffee
    return; // 🛑 Stop eksekusi
  }

  // ✅ Jika sukses, lanjut ke pengantaran
  sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
    if (sendCoffeeError) {
      console.error(sendCoffeeError); // ❌ Handle error dari sendCoffee
      return; // 🛑 Stop eksekusi
    }

    // 🎉 Semua berhasil!
    console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
    console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
  });
});
```

**Key Points:**

- 🔍 Check error di setiap callback
- 🔄 Early return jika ada error
- 📋 Sequential execution (step by step)

### 📄 main2.mjs - File System Error Handling

```javascript
import { readFile } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Setup path untuk ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

readFile(join(__dirname, "sample.txt"), (error, data) => {
  if (error) {
    console.log(error); // ❌ Handle file errors (ENOENT, EACCES, dll)
    return;
  }

  // ✅ Process file content
  const greeting = data
    .toString()
    .replace("%name%", "Dicoding")
    .replace("%your_name%", "JavaScript");

  console.log(greeting);
});
```

**Key Points:**

- 📁 File system operations bisa error
- 🛠️ Path resolution untuk ES modules
- 🔄 Template replacement setelah sukses baca file

### 📝 sample.txt - Template File

```
Hello %name%, my name is %your_name%.
```

## 🎭 Skenario Eksekusi

### ✅ Skenario Success (main.mjs)

```
Timeline:
⏰ 0ms    : "Saya memesan Kopi Espresso di kafe buxsel"
⏰ 1ms    : "Mohon menunggu, Pramusaji sedang membuatkan kopi dalam 5"
⏰ 5000ms : "Pramusaji selesai membuat kopi." ✅
⏰ 5001ms : "Pramusaji sedang mengantarkan kopi pesanan..."
⏰ 7000ms : "Pramsaji sudah sampai ke meja." ✅
⏰ 7001ms : "Pramusaji memberikan Kopi Espresso pesanan."
⏰ 7002ms : "Saya mendapatkan Kopi Espresso dan menghabiskannya."
```

### ❌ Skenario Error di makeCoffee

```
Timeline:
⏰ 0ms    : "Saya memesan Kopi Espresso di kafe buxsel"
⏰ 1ms    : "Mohon menunggu, Pramusaji sedang membuatkan kopi dalam 5"
⏰ 5000ms : Error: Gagal membuat kopi nich.. ❌
⏰ 5001ms : Program berhenti (sendCoffee tidak dipanggil)
```

### ❌ Skenario Error di sendCoffee

```
Timeline:
⏰ 0ms    : "Saya memesan Kopi Espresso di kafe buxsel"
⏰ 5000ms : "Pramusaji selesai membuat kopi." ✅
⏰ 5001ms : "Pramusaji sedang mengantarkan kopi pesanan..."
⏰ 7000ms : Error: Gagal mengantarkan kopi... ❌
⏰ 7001ms : Program berhenti
```

### 📄 Skenario File Reading (main2.mjs)

**Success:**

```
Input  : "Hello %name%, my name is %your_name%."
Output : "Hello Dicoding, my name is JavaScript."
```

**Error:**

```
Error: ENOENT: no such file or directory, open 'sample.txt'
```

## 💡 Error-First Callback Pattern

### 🔧 Struktur Standar

```javascript
function asyncFunction(input, callback) {
  // Simulasi async operation
  setTimeout(() => {
    const success = Math.random() > 0.5;

    if (!success) {
      callback(new Error("Operation failed"), null); // ❌
      return;
    }

    callback(null, "Success result"); // ✅
  }, 1000);
}

// Penggunaan:
asyncFunction("data", (error, result) => {
  if (error) {
    console.error("❌ Error:", error.message);
    return;
  }

  console.log("✅ Result:", result);
});
```

### 🎯 Keuntungan Pattern Ini

1. **Konsisten** 📋

   - Semua async functions mengikuti pola sama
   - Error selalu parameter pertama

2. **Eksplisit** ⚠️

   - Developer dipaksa handle error
   - Tidak bisa "lupa" menangani kesalahan

3. **Early Return** 🔄
   - Stop execution jika ada error
   - Menghindari nested code yang dalam

## ⚠️ Masalah Callback Hell

### ❌ Contoh Callback Hell dengan Error Handling

```javascript
operation1((err1, data1) => {
  if (err1) {
    console.error(err1);
    return;
  }

  operation2(data1, (err2, data2) => {
    if (err2) {
      console.error(err2);
      return;
    }

    operation3(data2, (err3, data3) => {
      if (err3) {
        console.error(err3);
        return;
      }

      // Finally done... 😵
      console.log("Result:", data3);
    });
  });
});
```

**Masalah:**

- 📐 "Pyramid of doom"
- 🔄 Repetitive error handling
- 🐛 Sulit di-debug
- 🧹 Sulit maintenance

## 🚀 Solusi Modern

### 1. Promises dengan .catch()

```javascript
function makeCoffeePromise(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3;

      if (!success) {
        reject(new Error("Gagal membuat kopi"));
        return;
      }

      resolve(name);
    }, 5000);
  });
}

// Penggunaan yang lebih clean:
makeCoffeePromise("Espresso")
  .then((result) => sendCoffeePromise(result))
  .then((result) => console.log("Success:", result))
  .catch((error) => console.error("Error:", error));
```

### 2. Async/Await dengan try/catch

```javascript
async function coffeeProcess() {
  try {
    const coffee = await makeCoffeePromise("Espresso");
    const delivery = await sendCoffeePromise(coffee);
    console.log("✅ Process complete:", delivery);
  } catch (error) {
    console.error("❌ Process failed:", error.message);
  }
}
```

## 🎮 Testing Error Scenarios

### 🔧 Cara Testing Error

1. **Modify Random Threshold**

```javascript
// Untuk testing, ubah ke 90% error rate
if (number > 0.9) {
  // Almost always error
  isSuccess = true;
}
```

2. **Force Error untuk Testing**

```javascript
const forceError = true; // Toggle ini untuk testing
if (forceError || !isSuccess) {
  callback(new Error("Forced error for testing"), null);
  return;
}
```

3. **Test File Errors**

```javascript
// Test dengan file yang tidak ada
readFile("nonexistent.txt", (error, data) => {
  // Selalu error ENOENT
});
```

## 🎯 Best Practices

### ✅ Do's

```javascript
// 1. Always check error first
callback((error, data) => {
  if (error) {
    console.error(error);
    return; // Don't forget return!
  }
  // Process data
});

// 2. Descriptive error messages
callback(new Error("Database connection timeout after 5s"), null);

// 3. Pass errors up the chain
function processData(data, callback) {
  validateData(data, (error, validData) => {
    if (error) {
      callback(error, null); // Pass error up
      return;
    }
    // Continue processing
  });
}
```

### ❌ Don'ts

```javascript
// 1. Don't ignore errors
callback((error, data) => {
  // BAD: Ignoring error completely
  console.log(data); // Might be undefined!
});

// 2. Don't continue after error
if (error) {
  console.error(error);
  // BAD: No return - code continues!
}
processData(data); // This runs even with error!

// 3. Don't throw in async callbacks
callback((error, data) => {
  if (error) {
    throw error; // BAD: Don't throw in callbacks
  }
});
```

## 🎓 Kesimpulan

**Error Callback** adalah fundamental pattern untuk:

- ✅ Menangani kesalahan dalam async operations
- ✅ Memberikan feedback yang jelas (sukses/gagal)
- ✅ Memaksa developer untuk consider error cases
- ✅ Dasar untuk memahami Promises dan async/await

**Key Takeaways:**

- 🎯 Error-first convention: `(error, data)`
- 🔍 Always check error di awal callback
- 🔄 Return after error handling
- 📝 Use descriptive error messages
- 🚀 Consider modern alternatives for complex flows

**Remember:** Good error handling = robust applications! 🛡️

**Files in this demo:**

- `coffee.mjs` → Business logic dengan error simulation
- `main.mjs` → Callback chaining + error handling
- `main2.mjs` → File system error handling
- `sample.txt` → Template data untuk processing
