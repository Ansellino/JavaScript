# Fungsi Sejati (Pure Function)

FP menawarkan banyak manfaat, selain membuat kode jadi lebih ringkas, kode yang Anda tulis akan lebih mudah untuk diuji. Sebab, dengan menerapkan FP, fungsi yang kita buat hasilnya selalu terprediksi. Untuk mencapai manfaat tersebut, hal dasar yang perlu kita terapkan adalah konsep pure function.

Pure function merupakan istilah bagi sebuah fungsi yang memiliki dua sifat berikut.

1. Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama.
   Contoh, ketika fungsi diberikan argumen X, ia harus selalu mengembalikan nilai Y meski dipanggil dalam kondisi dan waktu yang beda. Jadi, nilai yang dihasilkan oleh fungsi selalu terprediksi. Untuk mencapai ini, fungsi tidak boleh mengakses nilai di luar argumen dan variabel cakupan global.

2. Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.
   Dalam konteks ini, efek samping merujuk pada segala perubahan yang dilakukan oleh fungsi pada variabel atau keadaan di luar cakupannya, seperti mengubah variabel global, berinteraksi dengan input dan output.

Jika tidak memenuhi sifat tersebut, fungsi akan dikategorikan sebagai impure function.

Oke. Setelah mengetahui sifat dari pure function dan sebaliknya, kita lakukan sedikit pemanasan. Coba tebak, kira-kira fungsi addWith di bawah ini termasuk pure function atau impure function?

```bash
let value = 0;

function addWith(addingValue) {
  value += addingValue;
  console.log(`Current value is ${value}`);
  return value;
}

const result1 = addWith(1); // Output: Current value is 1
const result2 = addWith(1); // Output: Current value is 2
const result3 = addWith(1); // Output: Current value is 3

console.log(result1, result2, result3); // Output: 1, 2, 3
```

Jika menjawab impure function, jawaban Anda benar! Fungsi addWith dikategorikan sebagai impure karena sifat pure function tidak terpenuhi.

1. (X) Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama.
   Contoh kode di atas menunjukkan bahwa nilai yang dikembalikan oleh fungsi addWith yang diberikan argumen 1 selalu berbeda. Hal ini dipengaruhi oleh keadaan variabel value yang selalu berubah setiap kali pemanggilan terjadi. Ups! Ada efek sampingnya juga di sini.

2. (X) Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.
   Pemanggilan fungsi addWith memiliki efek samping. Selain mengubah variabel value, fungsi ini juga menulis sesuatu ke I/O melalui pemanggilan console.log. Efek samping ini membuat hasil dari pemanggilan fungsi tidak hanya bergantung pada argumen yang diberikan, tetapi juga keadaan di luar fungsi tersebut.

Bagaimana bentuk versi pure function dari addWith? Berikut kodenya.

```bash
function addWith(value, addingValue) {
  return value + addingValue;
}

const result1 = addWith(0, 1);
console.log(`result1 is ${result1}`); // Output: result1 is 1

const result2 = addWith(result1, 1);
console.log(`result2 is ${result2}`); // Output: result2 is 2

const result3 = addWith(result2, 1);
console.log(`result3 is ${result3}`); // Output: result3 is 3

console.log(result1, result2, result3); // Output: 1, 2, 3
```

Sekarang fungsi addWith menjadi pure function karena seluruh sifatnya telah terpenuhi.

1. (✓) Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama.
   Saat ini, fungsi addWith menerima dua argumen, yaitu value dan addingValue. Selama kedua nilai argumen tersebut sama, addWith akan mengembalikan nilai yang sama, kapan pun dan saat kondisi apa pun. Ini karena fungsi addWith sudah tidak bergantung pada nilai di luar dari cakupannya.

2. (✓) Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.
   Fungsi addWith sudah tidak mengubah nilai di luar cakupannya, tetapi ia menghasilkan nilai baru. Dengan dihapusnya kode console.log dari dalam fungsi, ia juga sudah tidak melakukan operasi I/O yang dapat menyebabkan efek samping.

Agar Anda semakin paham membedakan pure function dan impure function, simak beberapa contoh fungsi dalam masing-masing kategorinya.

```bash
// Mengubah nilai variabel global
let count = 0;
function increment() {
  count++;
}

// Mengakses waktu sistem
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}

// Mengubah status objek yang diterima sebagai parameter
function updateUser(user) {
  user.name = "Updated Name";
}

// Menulis ke berkas
const fs = require('fs');

function writeToFile(data) {
  fs.writeFileSync('data.txt', data);
}
```

Keuntungan menggunakan pure function termasuk kemampuan untuk mengoptimalkan kode melalui memoization, yakni hasil dari fungsi disimpan dan digunakan kembali jika input yang sama ditemukan. Teknik memoization termasuk praktik advance yang tidak akan kami jelaskan rinci di kelas ini. Sebagai informasi saja, dalam beberapa kasus, teknik memoization ini bisa meningkatkan performa secara signifikan. Jika Anda tertarik untuk mendalami teknik ini, artikel “Functional Programming: Understanding Memoization” menarik untuk dibaca.

Anyway, …

“Tidak memiliki efek samping” menjadi salah satu syarat yang menantang dari pure function. Nyatanya, dalam membuat aplikasi, interaksi dengan I/O selalu tidak bisa dihindari. Jika memang ada operasi yang perlu menghasilkan efek samping, menggunakan teknik advance bernama monad adalah solusi yang ditawarkan dalam FP. Namun, kita tidak akan membahas teknik tersebut secara detail, Anda bisa membaca artikel “What Are Monads in JavaScript” untuk memahami monad.

Tidak masalah jika kita belum 100% menulis kode yang pure dalam membuat fungsi. Sekali lagi, JavaScript termasuk bahasa multiparadigma. Tidak ada keharusan untuk mengikuti paradigma tertentu seutuhnya. Namun, setidaknya, dengan memahami prinsip FP dan benefit di dalamnya, kita membuat sebuah batasan untuk menjaga sebagian besar kode yang ditulis agar tetap pure.
