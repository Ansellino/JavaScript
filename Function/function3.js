const result = console.log("Javascript is amazing!");
console.log(result);

/*
Javascript is amazing!
undefined
*/

function sumNumbers(a, b) {
  const result = a + b;
  return result;
}

const result2 = sumNumbers(2, 4);
console.log("2 + 4:", result2); // Output: 2 + 4: 6

// return lebih baik daripada console.log
function generateGreetingWorldMessage() {
  return "Halo, dunia!";
  console.log("Ini tidak akan dieksekusi");
}

const messsage = generateGreetingWorldMessage();
console.log(message); // Output: Halo, dunia!

function convertCelsiusToFahrenheit(temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
}

const temperatureInFahrenheit = convertCelsiusToFahrenheit(100);
console.log("Hasil konversi: ", temperatureInFahrenheit); // Output: Hasil konversi: 212

const result3 = 3 * 4;
console.log(result3); // Output: 12

const convertCelsiusToFahrenheit2 = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

const temperatureInFahrenheit2 = convertCelciusToFahrenheit(100);
console.log("Hasil konversi: ", temperatureInFahrenheit2); // Output: Hasil konversi: 212

function multiply(a, b) {
  return a * b;
}

function calculate(operation, numA, numB) {
  return operation(numA, numB);
}

const result4 = calculate(multiply, 2, 4);
console.log(result4); // Output: 8

function multiplier(x) {
  return function (num) {
    return x * num;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10)); // Output: 20
console.log(triple(20)); // Output: 60
