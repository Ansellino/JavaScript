greetWorld();

function greetWorld() {
  console.log("Hello, World!");
  console.log("Selamat datang di dunia pemrograman JavaScript!");
}

function convertCelsiusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  console.log("Hasil konversi:", temperatureInFahrenheit);
}

convertCelsiusToFahrenheit(); // Output: Hasil konversi: NaN

function convertCelsiusToFahrenheitNoNull(temperature) {
  if (temperature !== null && temperature !== undefined) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;

    console.log("Hasil konversi:", temperatureInFahrenheit);
  } else {
    console.log("Input parameter tidak boleh null atau undefined");
  }
}

convertCelsiusToFahrenheitNoNull(); // Output: Hasil konversi: NaN

function convertCelsiusToFahrenheitWithDefault(temperature = 30) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  console.log("Hasil konversi: ", temperatureInFahrenheit);
}

convertCelsiusToFahrenheitWithDefault(); // Output: Hasil konversi: 86
