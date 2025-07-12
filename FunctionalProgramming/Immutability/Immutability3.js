// Array Map
/*
    ['Harry', 'Ron', 'Jeff', 'Thomas'].map(() => {});

    // Callback function
    ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { });
 */

const oldArray = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newArray = oldArray.map((name) => `${name}!`);

console.log(newArray);  // Output: ['Harry!', 'Ron!', 'Jeff!', 'Thomas!']
console.log(oldArray); // Output: ['Harry', 'Ron', 'Jeff', 'Thomas']