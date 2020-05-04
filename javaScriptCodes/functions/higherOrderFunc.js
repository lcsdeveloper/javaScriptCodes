let arr = [ 0, 1, 2 ],
    test = [];


//func that adds one to any value
function addOne( value ) {
    return value + 1;
}

//higher order map function source code
function map( arr, func ) {
    let copy = []; //return value placeholder array
    for ( let index = 0; index < arr.length; index++ ) {
        let original = arr[ index ];
        let modified = func( original );
        copy[ index ] = modified;
    }
    return copy;
}

arr = map( arr, addOne );
console.log( arr );