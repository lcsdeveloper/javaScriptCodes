let numbers1 = [1,2,3,4,5,6,7,8,9,10,11,12];
let numbers2 = [];

const multiply = function (array) { 
    for(let i of array){
        numbers2[i-1] = i * 5;
    }
    return numbers2;
}

console.log(multiply(numbers1));

