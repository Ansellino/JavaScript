// Properti dan method

class coffeMachine {
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.temperature = 90;
  }

  makeCoffee() {
    console.log("Membuat kopi dengan suhu", this.temperature);
  }
}

const coffee = new coffeMachine(100);
coffee.temperature = 60;

coffee.makeCoffee(); // Output: Membuat kopi dengan suhu 60
