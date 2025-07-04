// Menstrukturkan Data dengan Array
const array = [1, 2, 3];
console.log(typeof array); // Output: object

// Membuat array menggunakan object constructor
const users = new Array();
const numbers = new Array(5);
console.log(users, numbers); // Output: [ ], [ <5 empty items> ]

// Menggunakan sintaks Array.from
const foo = Array.from("foo");
console.log(foo); // Output: [ 'f', 'o', 'o' ]

const users2 = new Array("John", "Jane", "Jack", "Jill");
const customer = Array.from(users2);
console.log(customer); // Output: [ 'John', 'Jane', 'Jack', 'Jill' ]

// Menggunakan array literal
const fruits = ["apple", "banana", "cherry", "", "grape"];
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry', '', 'grape' ]

// Mengakses element array
const myArray = [42, 55, 30];
console.log(myArray[1]); // Output: 55

// Manipulasi Nilai Array
let myArray2 = [1, 2, 3, 4, 5];
myArray2[1] = 10;
console.log(myArray2); // Output: [ 1, 10, 3, 4, 5 ]

// Menggunakan push
let myArray3 = [1, 2, 3, 4, 5];
myArray3.push(6);
console.log(myArray3); // Output: [ 1, 2, 3, 4, 5, 6 ]

// Menghapus Element dan Data Array
let myArray4 = [
  "Android",
  "Data Science",
  "Web Development",
  "Machine Learning",
];
delete myArray4[1];
console.log(myArray4); // Output: [ 'Android', <1 empty item>, 'Web Development', 'Machine Learning' ]

// Splicing Array
let myArray5 = [
  "Android",
  "Data Science",
  "Web Development",
  "Machine Learning",
];
myArray5.splice(1, 1);
console.log(myArray5); // Output: [ 'Android', 'Web Development', 'Machine Learning' ]

myArray5.splice(1, 2);
console.log(myArray5); // Output: [ 'Android' ]

// Menggunakan shift
let myArray6 = [
  "Android",
  "Data Science",
  "Web Development",
  "Machine Learning",
];
myArray6.shift();
console.log(myArray6); // Output: [ 'Data Science', 'Web Development', 'Machine Learning' ]

// Menggunakan pop
let myArray7 = [
  "Android",
  "Data Science",
  "Web Development",
  "Machine Learning",
];
myArray7.pop();
console.log(myArray7); // Output: [ 'Android', 'Data Science', 'Web Development' ]

// Array Destructuring
const myArray8 = ["John", "Jane", "Jack"];
const [first, second, third] = myArray8;
console.log(second); // Output: Jane
console.log(first, third); // Output: John Jack

// Reverse Array
const myArray9 = ["John", "Jane", "Jack"];
myArray9.reverse();
console.log(myArray9); // Output: [ 'Jack', 'Jane', 'John' ]

// Sorting Array
const myArray10 = ["Lonewolf", "Jane", "Jack", "Ansel"];
myArray10.sort();
console.log(myArray10); // Output: [ 'Ansel', 'Jack', 'Jane', 'Lonewolf' ]
