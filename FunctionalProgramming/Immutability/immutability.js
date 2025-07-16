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

/**
 * Finds the maximum value in an array of numbers.
 * 
 * Mechanism:
 * 1. The sort() method arranges array elements in ascending order (a - b)
 * 2. When (a - b) returns negative: a comes before b
 * 3. When (a - b) returns positive: b comes before a  
 * 4. When (a - b) returns zero: order remains unchanged
 * 5. After sorting, pop() removes and returns the last element (highest value)
 * 
 * Note: This function mutates the original array due to sort() method.
 * For immutable approach, consider using [...arrayOfNumbers].sort() or Math.max()
 * 
 * @param {number[]} arrayOfNumbers - An array of numbers to find the maximum from
 * @returns {number|undefined} The maximum number in the array, or undefined if array is empty
 * 
 * @example
 * max([3, 1, 4, 1, 5]); // returns 5
 * max([]); // returns undefined
 * max([42]); // returns 42
 */

function max(arrayOfNumbers) {
    return arrayOfNumbers.sort((a, b) => a - b).pop();
}


const numbers = [10, 23, 24, 7, 42, 10];
const largest = max(numbers);

console.log(largest); // Output: 42
console.log(numbers); // Output: [10, 23, 24, 7, 42, 10]

