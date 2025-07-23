/*
contoh penggunaan callback
doSomething((dosomethingError, doSomethingData) => {
    if (doSomethingError) {
    console.log(doSomethingData);
    }
    console.log(doSomethingData);
});
*/

/*
function onFulffilled(doSomethingData) {
    // Do your jobs when "fulfilled" happens...
    console.log(doSomethingData);
}

function onRejected(doSomethingError) {
    // Do your jobs when "rejected" happens...
    console.log(doSomethingError);
}

doSomething().then(onFulfilled, onRejected);
*/

function promiseExecutor(resolve, reject) {
  setTimeout(() => {
    console.log("Melakukan sesuatu sebelum promise diselesaikan.");

    // Penentuan hasil dari proses asinkron
    const number = Math.random();

    // Nilai Fulfillment dari Promise
    if (number > 0.5) {
      resolve("You did it!");
    }

    // Nilai rejection dari Promise
    else {
      reject(new Error("Sorry, something went wrong!"));
    }
  }, 2000);
}

function doSomething() {
  return new Promise(promiseExecutor);
}

