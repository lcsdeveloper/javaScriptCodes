let arr = [ "lucas", "lisa", "maria" ],
    arr2 = [],
    arrNumbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
    arrTest = [],
    i = 0;

arr.forEach( element => {
    console.log( element.toUpperCase() );
} );

arr.forEach( element => {
    console.log( element.toLowerCase() );
} );

arrNumbers.forEach( element => {
    arrTest = element * element;
    console.log( arrTest );
} );

arr.forEach( element => {
    i++;
    arr2.push( `${element} got the id number ${i}` );

} );
console.log( arr2 );