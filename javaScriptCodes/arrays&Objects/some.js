let array = [ "lucas", 10, "rice" ];

const thereIsNumber = value => {
    if ( typeof value == "number" )
        return value;
};

let check = array.some( thereIsNumber );

console.log( check );