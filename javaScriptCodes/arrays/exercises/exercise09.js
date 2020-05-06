let array1 = [],
    array2 = [],
    array3 = [];

let fillArray = ( array1, array2 ) => {
    for ( let i = 0; i < 20; i++ ) {
        array1[ i ] = i;
        array2[ i ] = i + 20;
    }
};

fillArray( array1, array2 );

let grabArray1Length = array1.length,
    grabArray2Length = array2.length,
    grabBothArrayLength = grabArray1Length + grabArray2Length;

for ( let i = 0; i < grabBothArrayLength; i++ ) {
    if ( i < 19 )
        array3[ i ] = array1[ i ];
    else
        array3[ i ] = array2[ i - 19 ];
}

console.log( `${array1}, ${array2}, ${array3}` );