let miles = [ 5, 12, 75, 2, 5 ];

//add up all numbers using a for loop
let a = 0;

for ( let i = 0; i < miles.length; i++ ) a += miles[ i ];

console.log( a );

//add up all numbers using a reducer: array.reduce method
const r = ( accumulator, value ) => accumulator + value;
const result = miles.reduce( r );

console.log( result );