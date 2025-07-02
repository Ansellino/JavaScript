function printCompanyInfo() {
  const name = "PT. Maju Mundur";
  const legal = "LLC";

  console.log("Nama Perusahaan:", name);
  console.log("Bentuk Hukum:", legal);
}

function printEmployeeInfo() {
  const name = "Ansel Zorro";
  const position = "Software Engineer";
  const salary = 10000000;

  console.log("Nama Karyawan:", name);
  console.log("Jabatan:", position);
  console.log("Gaji:", salary);
}

printCompanyInfo();
console.log("");
printEmployeeInfo();

// nama variabel yang benar
const firstName = "Jeremy";
const last_name = "Ansellino";
const $message = "Hello, World!";
const userId1 = 123;
const userId2 = 456;

/* nama variabel yang salah
const first-name = 'Fulan'; // tidak boleh mengandung karakter -
const last name = 'Lestari'; // tidak boleh mengandung spasi
const @message = 'Hello, World!'; // tidak boleh mengandung karakter @
 
..dan lain-lain */

/* nama variabel yang benar
const firstName = 'Fulan';
const _secondName = 'Fulana';
 
nama variabel yang salah karena diawali dengan angka
const 1stName = 'Fulan';
const 2ndName = 'Fulana';
*/
