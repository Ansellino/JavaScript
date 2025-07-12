// JavaScript menyediakan fungsi Object.freeze untuk membekukan objek sehingga tidak dapat diubah
// setelah dibuat. Melalui fungsi ini, kita bisa memastikan bahwa tidak ada perubahan yang dapat dilakukan pada objek tersebut.

const user = {
    name: 'John',
    email: 'john@dicoding.com',
};

// Membekukan objek user
Object.freeze(user);

// Mencoba mengubah properti dari objek yang dibekukan
user.email = 'doe@dicoding.com';
console.log(user); // Output: { name: 'John', email: '

