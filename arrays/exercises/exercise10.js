let arrayNames = [ "lucas", "lisa", "ana", "carol", "bruna" ],
    x;

for ( let i = 0; i < 4; i++ ) {
    for ( let j = i + 1; j < 5; j++ ) {
        if ( arrayNames[ i ] > arrayNames[ j ] ) {
            x = arrayNames[ i ];
            arrayNames[ i ] = arrayNames[ j ];
            arrayNames[ j ] = x;
        }
    }
}

console.log(arrayNames);