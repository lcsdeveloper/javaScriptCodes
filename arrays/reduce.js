let array = [ 0, 1, 2, 3, 4, 5 ];

const mult = ( value, accumulator ) => value + accumulator;

let arrayMult = array.reduce( mult );

console.log( arrayMult );