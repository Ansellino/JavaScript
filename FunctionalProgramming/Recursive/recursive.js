function generateArray(n) {
    const result = [];
    for (let counter = 0; counter <= n; counter += 1){
        result.push(counter);
    }
    return result;
}

console.log(generateArray(10)); // Output: [0, 1, 2, 3, 4, 5]

