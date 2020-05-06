let arrayNames = [ "lucas", "lisa", "maria" ],
    search,
    found = false,
    question = "yes",
    i = 0;


while ( question == "yes" ) {
    //put the name you are looking for
    search = "lucas";

    //processing the searching
    while ( i <= 3 && found == false ) {
        if ( search === arrayNames[ i ] )
            found = true;
        else
            i++;
    }

    //showing if the search was either found or not
    if ( found == true )
        console.log( `your search was found in the position: ${i}` );
    else
        console.log( "did not find anything" );

    //ending the while loop
    question = "no";
}