function isEven(num){
    if (num%2 == 0){
        return result = "even";
    } else if (!num%2 == 0 && num >= 0){
        return result = "odd";
    } else {
        return result = "It is a negative number";
    }
}

console.log(isEven(75));