// Overriding constructor

class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class Android extends SmartPhones {
  // overriding constructor
  constructor(color, brand, model, device) {
    super(color, brand, model);
    this.device = device;
  }

  splitScreen() {
    console.log("Android have a Split Screen");
  }
}

const android = new Android("White", "B", "Galaxy S21", "Smart TV");

console.log(android);
android.charging(); // Charging Galaxy S21
android.splitScreen(); // Android have a Split Screen
