function doubleNumbers(arr) {
    const doubledArray = [];
    for (const number of arr) {
        doubledArray.push(number * 2);
    }
    return doubledArray;
}

const numbers = [1, 2, 3, 4];
const result = doubleNumbers(numbers);
console.log(result);
