// IF Statement

const gajian = true;

console.log("Berjalan-jalan di mall");
if (gajian) {
  console.log("Makan di restoran mall");
}
console.log("Pulang ke rumah");

// IF Statement dengan ELSE
const score = 80;
if (score >= 80) {
  console.log("Selamat, Anda lulus ujian!");
} else {
  console.log("Maaf, Anda tidak lulus ujian.");
}

// IF Statement dengan ELSE IF
const score1 = 91;

if (score1 > 90) {
  console.log("Selamat, Anda mendapatkan nilai A!");
} else if (score >= 80) {
  console.log("Selamat, Anda lulus ujian!");
} else {
  console.log("Maaf, Anda belum lulus ujian.");
}

// IF Statement dengan Ternary Operator

const price = 10000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(
  `Anda mendapatkan diskon sebesar ${
    discount * price
  }, jadi total yang harus dibayar adalah ${price - discount * price}`
);

// Switch Statement
const fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Buah yang dipilih adalah pisang.");
    break;
  case "apple":
    console.log("Buah yang dipilih adalah apel.");
    break;
  case "orange":
    console.log("Buah yang dipilih adalah jeruk.");
    break;
  default:
    console.log("Aku tidak memilih buah apa pun, aku memilih programmer.");
    break;
}

// Penerapan switch Statement

const day = new Date().getDay();

switch (day) {
  case 0:
    console.log("Minggu");
    break;
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  case 6:
    console.log("Sabtu");
    break;
  default:
    console.log("Hari tidak valid");
    break;
}

// Variabel number bernilai 2 sehingga kode yang ada di blok case 2 akan dieksekusi. Karena tidak ada keyword break di blok kode tersebut, blok case selanjutnya akan dijalankan sehingga hasilnya menjadi seperti di bawah ini.

const number = 2;

switch (number) {
  case 1:
    console.log("Satu");
    break;
  case 2:
    console.log("Dua");
  case 3:
    console.log("Tiga");
    break;
  default:
    console.log("Ini default");
}
