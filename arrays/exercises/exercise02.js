let numbers = [1, 2, 5,10], result = [];

//func which is gonna do the factorial
function factorialize(num) {
    if (num === 0 || num === 1)
        return 1;

    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

function callNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        result[i] = factorialize(array[i]);
    }
    return result;
}

//passing the array to the func
callNumbers(numbers);

//showing the array result
console.log(result);