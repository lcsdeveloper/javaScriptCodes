let number1 = 0,
    number2 = 0;

while ( number1++ < 5 ) {
    if ( number1 == 3 )
        break;
    console.log( number1 );
}


//this is a bad code just take it as an example  \/
while ( number2++ < 1000 ) {
    if ( number2 > 1 )
        continue;
    console.log( number2 );
}