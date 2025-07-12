function addWith(value, addingValue) {
  return value + addingValue;
}

const result1 = addWith(0, 5); // Output: 5
console.log(`result1: ${result1}`); // Output: result1: 5

const result2 = addWith(result1, 1); // Output: 6
console.log(`result2: ${result2} is ${result2}}`); // Output: result2: 6 is 6}

const result3 = addWith(result2, 10); // Output: 16
console.log(`result3: ${result3} is ${result3}`); // Output: result3: 16 is 16

console.log(result1, result2, result3); // Output: 5 6 16

