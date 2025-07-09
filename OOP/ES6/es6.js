class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Membuat instance dari Person
const person1 = new Person("Ansel", 20);
const person2 = new Person("Zorro", 25);

console.log(person1.name); // Output: Ansel
console.log(person2.name); // Output: Zorro

person1.eat(); // Output: Ansel is eating.
person2.eat(); // Output: Zorro is eating.

// Memndefinisikan constuctor function
console.log(typeof Person); // Output: function
