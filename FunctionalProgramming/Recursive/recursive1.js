function generateArray(n) {
    // Base case: if n is negative, return empty array to stop recursion
    if (n < 0) {
        return [];
    }

    // Recursive case:
    // 1. Call generateArray(n - 1) to get array from 0 to n-1
    // 2. Use spread operator (...) to unpack/expand that array
    // 3. Add current value n at the end
    // 4. Return new array containing all previous elements + n
    return [...generateArray(n - 1), n];
}

// Example execution trace for generateArray(3):
// generateArray(3) → [...generateArray(2), 3]
//   generateArray(2) → [...generateArray(1), 2]
//     generateArray(1) → [...generateArray(0), 1]
//       generateArray(0) → [...generateArray(-1), 0]
//         generateArray(-1) → [] (base case)
//       generateArray(0) → [...[], 0] → [0]
//     generateArray(1) → [...[0], 1] → [0, 1]
//   generateArray(2) → [...[0, 1], 2] → [0, 1, 2]
// generateArray(3) → [...[0, 1, 2], 3] → [0, 1, 2, 3]

console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]