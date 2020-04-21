
function calcMath () {
    //closure scope with it's methods
    function sum( a, b ) {
        return a + b;
    }

    function div( a, b ) {
        return a / b;
    }

    function sub( a, b ) {
        return a - b;
    }

    function mult( a, b ) {
        return a * b;
    }

    return [ sum, div, sub, mult ];
}

//global scope /* window */
const calc = calcMath();
const globalSum = calc[ 0 ];
const globalDiv = calc[ 1 ];
const globalSub = calc[ 2 ];
const globalMult = calc[ 3 ];

console.log( globalSum( 4, 4 ) );
console.log(globalDiv(10,2));
console.log( globalSub( 6, 2 ) );
console.log(globalMult(3,5));