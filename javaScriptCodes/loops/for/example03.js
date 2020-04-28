let arr = [ "ana", "aline", "lucas", "lisa" ];

for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[ i ] == "lucas" )
        continue;//it will skip the for at this point 
    console.log( arr[ i ] );
}
