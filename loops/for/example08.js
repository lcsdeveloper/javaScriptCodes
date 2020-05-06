let numbers = [],
    numbers2 = [],
    numbers3 = [];

for ( let i = 0; i < 11; i++ ) numbers[ i ] = i;

for ( let i = 0; i < numbers.length; i++ ) {
    if ( i % 2 === 0 )
        numbers2[ i ] = numbers[ i ] + 5;
    else
        numbers2[ i ] = numbers[ i ] * 5;

}

for ( let i = 0; i < numbers.length; i++ ) console.log( `Matriz A: ${numbers[i]}, Matriz B: ${numbers2[i]}` );