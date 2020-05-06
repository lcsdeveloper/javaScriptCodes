/**
 * this exercise is about doing a arra1 of 20 numbers then creating a new array of the same size but 
 * with the numbers in a opposite order
 */
let array1 = [],
    array2 = [];

//filling the array 
const fillArray = () => {
    for ( let i = 0; i < 20; i++ ) array1[ i ] = i;
};
fillArray( array1 );

//getting the array length it will help with any size of array
let grabLength = array1.length;
let grabIndex=grabLength;

//changing the order in the arr1 
for ( let i = 0; i < grabLength; i++ ) array2[i]=array1[--grabIndex];

console.log(`This is the first array: ${array1}
this is the second: ${array2}`);
