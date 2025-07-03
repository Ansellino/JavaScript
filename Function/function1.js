const temperatureInCelsius = 90;
const temperatureInFahrenheit = (9 / 5) * temperatureInCelsius + 32;

console.log("Hasil konversi: ", temperatureInFahrenheit);

// Output: Hasil konversi: 194

let temperatureInCelsius2;
let temperatureInFahrenheit2;

temperatureInCelsius2 = 50;
temperatureInFahrenheit2 = (9 / 5) * temperatureInCelsius2 + 32;
console.log("Hasil konversi: ", temperatureInFahrenheit2); // Output: Hasil konversi: 122

temperatureInCelsius2 = 70;
temperatureInFahrenheit2 = (9 / 5) * temperatureInCelsius2 + 32;
console.log("Hasil konversi: ", temperatureInFahrenheit2); // Output: Hasil konversi: 158

temperatureInCelsius2 = 100;
temperatureInFahrenheit2 = (9 / 5) * temperatureInCelsius2 + 32;
console.log("Hasil konversi: ", temperatureInFahrenheit2); // Output: Hasil konversi: 212

function convertCelsiusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  console.log("Hasil konversi: ", temperatureInFahrenheit);
}

let temperatureInCelsius3 = 300;

convertCelsiusToFahrenheit(200); // Output: Hasil konversi: 392
convertCelsiusToFahrenheit(temperatureInCelsius3); // Output: Hasil konversi: 572
