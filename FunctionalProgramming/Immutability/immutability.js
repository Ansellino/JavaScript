// Yang Sudah Tercipta, Tak Bisa Diubah Lagi (Immutability)

/* Dalam JavaScript, kita dapat menerapkan prinsip immutability dengan menggunakan fungsi yang mengembalikan salinan baru, alih-alih mengubah data asli. Biasanya ini dilakukan ketika kita perlu mengubah data dari objek ataupun array. Namun, sebelum mengetahui berbagai fungsi yang dapat mendukung prinsip immutability, kita perlu tahu dulu fungsi-fungsi “bahaya” yang perlu diperhatikan kembali.
*/

// Fungsi yang mengubah data ( Mutator Function )

/*
Array.push: menambahkan elemen di akhir dari sebuah array.
Array.pop: menghapus elemen terakhir dari sebuah array.
Array.shift: menghapus elemen pertama dari sebuah array.
Array.unshift: menambahkan elemen di awal dari sebuah array.
Array.splice: menambahkan atau menghapus elemen di posisi tertentu dari sebuah array.
Array.reverse: membalikkan urutan elemen dari sebuah array.
Array.sort: mengurutkan elemen dari sebuah array.
Object.assign: memodifikasi properti dari object.
 */

function max(arrayOfNumbers) {
    return arrayOfNumbers.sort((a, b) => a - b).pop();
}

const numbers = [10, 23, 24, 7, 42, 10];
const largest = max(numbers);

console.log(largest); // Output: 42
console.log(numbers); // Output: [10, 23, 24, 7, 42, 10]

