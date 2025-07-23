import { makeCoffee, sendCoffee } from "./coffee.mjs";

const order = "Kopi Espresso";

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order)
  .then(
    (value) => {
      return sendCoffee(value);
    },
    (error) => {
      console.error(error.message);
      throw error;
    }
  )
  .then(
    (value) => {
      console.log(`Pramusaji memberikan ${value} pesanan.`);
      console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    },
    (error) => {
      console.error("Kopi tidak sampai ke meja saya.");
      throw error;
    }
  );

/* pattern: chaining
  makeCoffee(order)
  .then((value) => {
    return sendCoffee(value);
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.log(error.message);
  });
  */

/* Formula:
  makeCoffee(order)
  .then((value) => {  Do your jobs...  })
  .then((value) => {  Do your jobs...  })
  .then((value) => {  Do your jobs...  })
  .then((value) => {  Do your jobs...  })
  .then((value) => {  Do your jobs...  })
  .then((value) => {  Do your jobs...  })
  .catch((error) => console.log(error.message));
  */
