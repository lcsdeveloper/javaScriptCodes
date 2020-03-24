let numA = 50 , numB = 10, numC = 2 , numX = 0;

//putting the numbers in order 

if ( numA > numB) {
    numX = numA;
    numA = numB;
    numB = numX;
} if ( numA > numC) {
    numX = numA;
    numA = numC;
    numC = numX;
} if ( numB > numC) {
    numX = numB;
    numB = numC;
    numC = numX;
}

console.log(numA, numB, numC);