# JavaScript Learning Cheatsheet 📚

Selamat datang di repository pembelajaran JavaScript! Repository ini berisi kumpulan materi, contoh kode, dan latihan untuk mempelajari JavaScript dari dasar hingga menengah.

## 📁 Struktur Folder

```
JavaScript/
├── 📄 readme.md                    # Panduan utama (file ini)
├── 📄 AWS.docx                     # Dokumentasi AWS
├── 📄 Complete JavaScript Cheatsheet.pdf
├── 📄 JavaScript Foundation Mastery Cheatsheet.pdf
├── 📄 Javascript.docx
├── 📁 Dasar/                       # Konsep dasar JavaScript
│   ├── comment.js                  # Komentar dalam JavaScript
│   ├── expression.js               # Ekspresi dan template literal
│   ├── operator.js                 # Berbagai jenis operator
│   ├── variabel.js                 # Penggunaan const dan let
│   ├── variabel1.js                # Aturan penamaan variabel
│   └── variabel2.js                # Tipe data dan konversi
├── 📁 Function/                    # Fungsi dalam JavaScript
│   ├── function1.js                # Pengenalan fungsi
│   ├── function2.js                # Parameter dan default values
│   ├── function3.js                # Return values dan function expression
│   └── function4.js                # Arrow functions
├── 📁 Kuis/                        # Latihan dan kuis
│   ├── kuis1.js                    # Kuis variabel dan operator
│   └── kuis2.js                    # Kuis fungsi
└── 📁 BukanSembarangData/          # Folder tambahan
```

## 🚀 Cara Memulai

### Prasyarat

- Node.js terinstall di komputer Anda
- Text editor (VS Code, Sublime Text, atau lainnya)
- Terminal/Command Prompt

### Menjalankan Kode

1. Buka terminal/command prompt
2. Navigasi ke folder yang berisi file JavaScript
3. Jalankan file dengan perintah:
   ```bash
   node nama_file.js
   ```

## 📖 Materi Pembelajaran

### 1. Dasar JavaScript (`Dasar/`)

#### 📝 Komentar (`comment.js`)

- Komentar satu baris dengan `//`
- Komentar multi-baris dengan `/* */`
- Pentingnya dokumentasi kode

#### 🔢 Variabel (`variabel.js`, `variabel1.js`, `variabel2.js`)

- **`const`**: Untuk nilai yang tidak berubah
- **`let`**: Untuk nilai yang dapat berubah
- **Aturan penamaan**: camelCase, tidak boleh dimulai dengan angka
- **Tipe data**: String, Number, Boolean, null, undefined

#### 🧮 Operator (`operator.js`)

- **Unary Operator**: `typeof`
- **Binary Operator**: `+`, `-`, `*`, `/`, `%`
- **Ternary Operator**: `condition ? true : false`
- **Logical Operator**: `&&`, `||`, `!`
- **String Operator**: Concatenation dengan `+`

#### 📋 Ekspresi (`expression.js`)

- Template literal dengan backticks (`)
- String interpolation dengan `${}`

### 2. Fungsi (`Function/`)

#### 🔧 Dasar Fungsi (`function1.js`)

- Deklarasi fungsi dengan `function`
- Parameter dan argumen
- Pemanggilan fungsi

#### ⚙️ Parameter Fungsi (`function2.js`)

- Default parameter values
- Validasi parameter
- Hoisting pada fungsi

#### 🔄 Return Values (`function3.js`)

- Mengembalikan nilai dengan `return`
- Function expression
- Higher-order functions
- Closure

#### 🏹 Arrow Functions (`function4.js`)

- Sintaks arrow function `=>`
- Perbedaan dengan regular function
- Sintaks ringkas untuk single expression

### 3. Latihan (`Kuis/`)

#### 📝 Kuis 1 (`kuis1.js`)

- Latihan variabel dan operator
- Manipulasi string
- Penggunaan template literal

#### 📝 Kuis 2 (`kuis2.js`)

- Latihan fungsi dengan parameter
- Default parameter values
- Template literal dalam fungsi

## 🎯 Tips Belajar

### Untuk Pemula

1. **Mulai dari Dasar**: Pelajari file di folder `Dasar/` secara berurutan
2. **Praktik Langsung**: Jalankan setiap file dan amati outputnya
3. **Eksperimen**: Ubah nilai dan lihat perubahannya
4. **Baca Komentar**: Setiap file memiliki penjelasan dalam komentar

### Urutan Pembelajaran yang Disarankan

1. `Dasar/comment.js` - Pelajari cara membuat komentar
2. `Dasar/variabel.js` - Memahami const dan let
3. `Dasar/variabel1.js` - Aturan penamaan variabel
4. `Dasar/variabel2.js` - Tipe data dan konversi
5. `Dasar/operator.js` - Berbagai jenis operator
6. `Dasar/expression.js` - Template literal
7. `Function/function1.js` - Pengenalan fungsi
8. `Function/function2.js` - Parameter fungsi
9. `Function/function3.js` - Return values
10. `Function/function4.js` - Arrow functions
11. `Kuis/kuis1.js` - Latihan variabel
12. `Kuis/kuis2.js` - Latihan fungsi

## 💡 Contoh Penggunaan

### Menjalankan File Dasar

```bash
# Menjalankan file komentar
node Dasar/comment.js

# Menjalankan file variabel
node Dasar/variabel.js

# Menjalankan file operator
node Dasar/operator.js
```

### Menjalankan File Fungsi

```bash
# Menjalankan file fungsi dasar
node Function/function1.js

# Menjalankan file arrow function
node Function/function4.js
```

### Menjalankan Kuis

```bash
# Menjalankan kuis 1
node Kuis/kuis1.js

# Menjalankan kuis 2
node Kuis/kuis2.js
```

## 🐛 Troubleshooting

### Error Umum

1. **SyntaxError**: Periksa tanda kurung, titik koma, dan tanda kutip
2. **ReferenceError**: Variabel belum dideklarasikan
3. **TypeError**: Menggunakan method yang tidak sesuai dengan tipe data

### Tips Debugging

- Gunakan `console.log()` untuk melihat nilai variabel
- Periksa pesan error di terminal
- Baca kode baris per baris

## 📚 Referensi Tambahan

### Dokumentasi

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [W3Schools JavaScript](https://www.w3schools.com/js/)

### Online Playground

- [CodePen](https://codepen.io/)
- [JSFiddle](https://jsfiddle.net/)
- [Replit](https://replit.com/)

## 🎓 Setelah Menyelesaikan Materi Ini

Setelah memahami konsep dasar, lanjutkan dengan mempelajari:

- **Array dan Object**: Struktur data kompleks
- **Control Flow**: if/else, loops, switch
- **DOM Manipulation**: Interaksi dengan HTML
- **Async JavaScript**: Promise, async/await
- **ES6+ Features**: Destructuring, spread operator, modules

## 🤝 Kontribusi

Jika Anda menemukan error atau ingin menambahkan materi, silakan:

1. Buat issue untuk melaporkan bug
2. Tambahkan contoh kode baru
3. Perbaiki dokumentasi

---

**Selamat belajar JavaScript! 🚀**

> "The best way to learn programming is by programming." - Practice makes perfect!

**Dibuat dengan ❤️ untuk pembelajaran JavaScript**
