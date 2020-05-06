/**
 * this is about creating a array1 with any numbers and the array2 should have the square of 
 * the number in array1
 */

let array1 = [],
    array2 = [];


//function for filling the array
let fillArray = () => {
    //here i could do the process and already get the square but then i do not know if i would 
    //skip the meaning of the exercise
    for ( let i = 0; i < 10; i++ ) array1[ i ] = i;
};

fillArray( array1 );

//for loop for doing the square of the array1
for ( let i = 0; i < array1.length; i++ ) array2[ i ] = array1[ i ] * array1[ i ];

console.log( array2 );