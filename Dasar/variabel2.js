// Contoh String

const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}.`;

console.log(text);

// Contoh Number

const result = 50 / 0;
console.log(result); // output: Infinity

const result1 = Number("Dicoding");
console.log(result1); // Output : Nan

// Contoh Boolean

const completed = true;
const passed = false;

console.log(completed, passed); // output: true false

const isGreater = 5 > 2;

console.log(isGreater); // output: true (5 lebih besar dari 2)

// Nilai Kosong

let message = null;

console.log(message); // output: null

let message2 = undefined;

console.log(message2); // output: undefined

// Null and Undefined

const name1 = { first: "Dicoding", last: null };
const name2 = { first: "Dicoding", last: undefined };

console.log(JSON.stringify(name1)); // output: {"first" : "Dicoding", "last": null}
console.log(JSON.stringify(name2)); // output: {"first" : "Dicoding"}

// Mengubah Nilai Antar Tipe Data
// Konversi Eksplisit

// Mengubah ke String

const number2 = 123;
const boolean = true;

const strNumber = String(number2);
const strBoolean = boolean.toString();

console.log(strNumber); // output: "123"
console.log(strBoolean); // output: "true"

// Mengubah ke Number

const strNumber2 = "456";
const strFloat = "3.14";
const boolean2 = true;

const numFromString = Number(strNumber2);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean2);

console.log(numFromString); // output: 456
console.log(floatFromString); // output: 3.14
console.log(numFromBoolean); // output: 1

// Mengubah ke Integer

const cm = "20cm";
const px = "64px";

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64

// Mengubah ke float

const cm1 = "20.55cm";
const px1 = "64.23px";

const floatFromCM1 = parseFloat(cm1);
const floatFromPX1 = parseFloat(px1);

console.log(floatFromCM1); // output: 20.55
console.log(floatFromPX1); // output: 64.23

// Mengubah ke Boolean

const number3 = 123;
const string = "Dicoding";
const empty = null;

const boolFromNumber = Boolean(number3);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false

// Konversi Implisit
const age = 20;
const message3 = "Umurku: " + age;

console.log(message3); // output: "Umurku: 20"

const strNumber3 = "123";
const result4 = strNumber3 * 2;

console.log(result4); // output: 246

const bool = true;
const result5 = 1 + bool;

console.log(result5); // output: 2
