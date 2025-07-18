// Langkah awalnya, kita akan memanfaatkan satu global function dari JavaScript sebagai simulasi untuk menciptakan proses asinkron, yaitu setTimeout.
// setTimeout adalah salah satu dari sekian global function yang dapat menetapkan timer (pengatur waktu) bagi function agar dieksekusi. Jadi, ada dua parameter wajib, yaitu nilai berupa function dan number sebagai timer. Setelah timer sudah berakhir, seluruh cuplikan kode dalam function akan dieksekusi.

const estimationTime = 10_000; // 10 detik

setTimeout(() => {
  console.log(`Hello, world!`);
}, estimationTime);

/* Output:
Hello, World!
*/
