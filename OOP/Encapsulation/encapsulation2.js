class coffeeMachine {
  #temperature = 90;

  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.#temperature = this.#defaultTemperature();
  }
  set temperature(temperature) {
    console.log("You are not allowed to change the temperature");
  }

  get temperature() {
    return this.#temperature;
  }

  #defaultTemperature() {
    return 90;
  }
}
