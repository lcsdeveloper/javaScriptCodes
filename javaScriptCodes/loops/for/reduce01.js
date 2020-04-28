let arr = [ 20, 40, 60, 80, 100, 110, 120 ];

const reduceArr = ( accumulator, value ) => accumulator + value;

const resultArr = arr.reduce(reduceArr);

console.log(`First array ${arr},
after reduce array ${resultArr}`);

//reduce does not chance the first array
