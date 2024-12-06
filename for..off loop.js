function doubleNumbers(arr) {
    const doubledArray = [];
    for (const number of arr) {
        doubledArray.push(number * 2);
    }
    return doubledArray;
}

// Example usage:
const numbers = [1, 2, 3, 4];
const result = doubleNumbers(numbers);
console.log(result); // Output: [2, 4, 6, 8]
