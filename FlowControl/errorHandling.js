// Error Handling
/*
Sepandai-pandainya tupai melompat, akan jatuh juga. Sebaik apa pun kita menulis program, suatu saat akan terjadi error. Error yang terjadi bisa berasal dari expected error (error yang terduga) dan unexpected error (error yang tidak terduga). 

Error yang dibiarkan dan tidak ditangani akan menyebabkan crash pada program yang dibangun. JavaScript memiliki cara untuk menangani error tersebut yang disebut dengan error handling. Error handling dapat mencegah crash pada program ketika terjadi error yang disebabkan oleh kesalahan syntax atau error lainnya.
*/

// Throwing Error
/*
throw <objek error>
*/

const error = new Error("Terjadi error");
console.error(error);

// Kita perlu throw error ketika pembayaran kurang dari harga barang seperti contoh berikut:
const price = 100;
const paid = 80;

if (paid < price) {
  throw new Error("Pembayaran kurang");
}

// Catching Error

// Try-Catch

/*
try {
 
  // code...
 
} catch (err) {
 
  // error handling
 
}
*/

try {
  console.log("Memulai program");
  console.log("Mengakhiri program");
} catch (err) {
  console.log("Karena tidak ada error, blok ini akan diabaikan");
}

/*
Kode tersebut tidak akan mengeksekusi kode di dalam blok catch. Jika ingin blok kode catch dieksekusi, tambahkan error di dalam blok try. Perhatikan contoh berikut ini.
*/

try {
  console.log("Memulai program");
  throw new Error("Error: Program berhenti");
  console.log("Mengakhiri program");
} catch (err) {
  console.log("Karena ada error, blok ini akan dieksekusi");
}

/* 
Catatan
Ketika error dibangkitkan, kode yang ada di bawahnya tidak akan tereksekusi. Pada kasus ini, program akan langsung lompat ke blok catch.

*/

// Finally
/*
Finally adalah blok kode yang berada di akhir try-catch. Bilamana catch dieksekusi hanya ketika ada error di dalam blok try, blok yang ada di finally akan selalu dieksekusi. Simak contoh di bawah ini.
*/

try {
  console.log("Ini try block");
} catch (err) {
  console.log("Ini catch block");
} finally {
  console.log("Ini finally block");
}

// Ketika dijalankan, akan tampil di terminal/console yang mencetak tulisan “Ini try block“ dan “Ini finally block”. Dengan menggunakan finally, ia tidak peduli apakah blok try memiliki error atau tidak.

try {
  console.log("Ini try block");
  throw new Error("Error: Program berhenti");
} catch (err) {
  console.log("Ini catch block");
} finally {
  console.log("Ini finally block");
}
