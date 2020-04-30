let numbers = [],
    sumNumbers = 0;

for ( let i = 1; i < 6; i++ ) numbers[ i ] = i;

for ( let i = 0; i < numbers.length; i++ ) {
    if ( i % 2 !== 0 )
        sumNumbers += i;
    else
        console.log( "i am a even number" );
}

console.log( `I am the sum of all odds numbers in the array: ${sumNumbers}` );