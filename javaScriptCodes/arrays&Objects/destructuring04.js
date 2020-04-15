function rand([min = 0, max = 1000]) {
    if (min > max) {
        [min, max] = [max, min];
    }

    // I could have done the above code like bellow but for a better understaning
    // I let it in a regular way
    //if (min > max) [min, max] = [max, min];

    const value = Math.random() * (max - min) + min;

    return Math.floor(value);
}

console.log(rand([50, 40]));//testing the if statement in the func
console.log(rand([980]));//passing only the first value
console.log(rand([, 20]));//passing only the seccond value
console.log(rand([]));//passing any value