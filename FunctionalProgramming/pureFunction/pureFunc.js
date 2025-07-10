let value = 0;

function addWith(addingValue) {
  value += addingValue;
  console.log(value);
  return value;
}

const result1 = addWith(5); // Output: 5
const result2 = addWith(1); // Output: 6
const result3 = addWith(10); // Output: 16

console.log(result1, result2, result3); // Output: 5 6 16
