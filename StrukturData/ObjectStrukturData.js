// Membuat Object
const user = {
  name: "Jeremy",
  "last name": "Ansellino",
  age: 25,
};
const products = { name: "sepatu", price: 230000 };

const user2 = {
  name: "Jeremy",
  lastName: "Ansellino",
  age: 25,
};

console.log(user);
console.log(user.name);
console.log(user["last name"]);

// const { name, lastName } = user2; // Destructuring Object
// console.log(name, lastName);

const { name, lastName, isMale = true } = user2;
console.log(name, lastName, isMale);

const user3 = {
  id: 24,
  email: "ansellino@gmail.com",
  name: "Jeremy",
  nickname: "Jemmy",
  username: "jeremyansellino",
  password: "123456",
};

// const { id, email } = user3;
// console.log(id, email);

const id = user3.id;
const email = user3.email;
console.log(id, email);

console.log(user3.age); // Output: undefined

const account = {
  balance: 1000,
  debt: 10,
};

account.balance = 2000;
console.log(account.balance); // Output: 2000

// Menghapus property dari Object
const user4 = {
  name: "Jeremy",
  lastName: "Ansellino",
  age: 25,
};

delete user4.age;
console.log(user4); // Output: { name: 'Jeremy', lastName: 'Ansellino' }

const user5 = {
  name: "Jeremy",
  lastName: "Ansellino",
  age: 25,
};

delete user5["lastName"];
console.log(user5); // Output: { name: 'Jeremy', age: 25 }
