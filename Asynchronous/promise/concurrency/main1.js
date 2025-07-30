const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("Ups!")), 2000)
);
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([promise1, promise2, promise3])
  .then((values) => {
    console.log("Success");
    console.log(values);
  })
  .catch((error) => {
    console.log("Failed");
    console.log(error.message);
  });

/* Output:
  Success
  [
    { status: 'fulfilled', value: 1 },
    {
    status: 'rejected',
    reason: Error: Ups!
        at Timeout._onTimeout (c:\Users\AnselZorro\Desktop\Thesis\CheatSheet\JavaScript\Asynchronous\promise\concurrency\main1.js:3:27)
        at listOnTimeout (node:internal/timers:594:17)
        at process.processTimers (node:internal/timers:529:7)
    },
    { status: 'fulfilled', value: 3 }
]
*/
