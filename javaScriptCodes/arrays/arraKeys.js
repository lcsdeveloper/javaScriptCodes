let arr = [ "l", "u", "c", "a", "s" ],
    iterator = arr.keys(), //shows the indices of the array
    iterator2=arr.values(); //shows the values of the indice in the array

for ( let i of iterator ) {
    console.log( i );
}

for(let i of iterator2){
    console.log(i);
}