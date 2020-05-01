let arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
grab=[],i=0;

const multArr = arr.map( element => element * 2 );

console.log(multArr);

const multArrOdd = arr.map(odd => {
    if (odd%2!==0){
        grab[i]=odd;
        i++;
    }
    return grab;
});

console.log(grab);