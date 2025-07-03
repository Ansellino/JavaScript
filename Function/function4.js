let temperatureInFahrenheit = null;

// Deklarasi function dengan Regular Function
const convertCelciusToFahrenheitUsingRegularFunction = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelciusToFahrenheitUsingRegularFunction(90);
console.log("Hasil konversi: ", temperatureInFahrenheit); // Hasil konversi: 194

// Deklarasi function dengan Arrow Function
const convertCelciusToFahrenheitUsingArrowFunction = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};
temperatureInFahrenheit = convertCelciusToFahrenheitUsingArrowFunction(120);
console.log("Hasil konversi: ", temperatureInFahrenheit); // Hasil ==> konversi : 248

// Refactoring

let temperatureInFahrenheit2;

// Arrow Function
const convertCelciusToFahrenheit = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit2 = convertCelciusToFahrenheit(90);
console.log("Hasil konversi: ", temperatureInFahrenheit2); // Hasil konversi: 194

// Arrow Function versi ringkas
const convertCelciusToFahrenheitInConciseSyntax = (temperature) =>
  (9 / 5) * temperature + 32;

temperatureInFahrenheit = convertCelciusToFahrenheitInConciseSyntax(150);
console.log("Hasil konversi: ", temperatureInFahrenheit);
