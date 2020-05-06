let array = [ "lucas", "lisa" ],
    array2 = [ "lucas", 2 ];

const isString = value => {
    if ( typeof value == "string" )
        return value;
};

let check = array.every( isString );
let check2 = array2.every( isString );

console.log( check, check2 );