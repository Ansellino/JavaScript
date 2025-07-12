// Duplikasi alih-alih mengubah aslinya

function max(arrayOfNumber) {
    // Menggunakan spread operator untuk menduplikasi nilai arrayOfNumber
    return [...arrayOfNumber]
        .sort((a, b) => a - b)
        .pop();
}

function registerEmail(person, email) {
    // Menggunakan spread operator untuk menduplikasi nilai person
    return {...person, email};
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);

console.log(largest);
console.log(numbers);

const person = {
    name: 'John',
    username: 'Johndoe',
};

const personWithEmail = registerEmail(person, 'john@dicoding.com');

console.log(person); // Output: { name: 'John', username: 'Johndoe' }
console.log(personWithEmail); // Output: { name: 'John', username: 'Johndoe', email: '
