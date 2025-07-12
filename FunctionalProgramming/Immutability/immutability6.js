// Array.reduce digunakan untuk mengurangi array menjadi satu nilai, dengan menerapkan fungsi callback pada setiap elemen array. Fungsi ini sangat berguna untuk mengakumulasi nilai atau mengubah struktur data dari array menjadi objek atau nilai tunggal.
/*
 array.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])

 // [...] is optional paramter
 */

const students = [
    {name: 'Harry', score: 80},
    {name: 'Ron', score: 90},
    {name: 'Jeff', score: 85},
    {name: 'Thomas', score: 95}
]

const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore); // Output: 350