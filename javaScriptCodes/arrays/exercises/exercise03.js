let numbers1 = [12, 2, 8, 5, 3, 6, 100, 11, 20, 28];
let numbers2 = [10, 5, 0, 85, 33, 54, 20, 14, 52, 12];
let result = [];

function sortNumber(a, b) {
    return a - b;
}

function sum(array1, array2) {
    for (let i = 0; i < 10; i++) {
        result[i] = array1[i] + array2[i];
    }
    return result;
}

console.log(numbers1.sort(sortNumber));
console.log(numbers2.sort(sortNumber));

sum(numbers1, numbers2);

console.log(result);