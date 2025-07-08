// Constructor Function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};


