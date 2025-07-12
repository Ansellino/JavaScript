function registerEmail(person, email) {
    return Object.assign(person, {email});
}

const person = {
    name: 'John',
    username: 'Johndoe',
};

const personWithEmail = registerEmail(person, 'john@dicoding.com');

console.log(person); // Output: { name: 'John', username: 'Johndoe' }
console.log(personWithEmail); // Output: { name: 'John', username: 'Johndoe', email: '
