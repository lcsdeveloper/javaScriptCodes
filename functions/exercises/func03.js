const power = function(base, expoent){
    let result = 1;

    for(let count = 0; count < expoent; count ++){
        result *= base;
    }
    return result;
}

console.log(power(2,10));