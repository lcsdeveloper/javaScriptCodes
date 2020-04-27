let todoList = [];

// add a value at the end of the array
function remember( task ) {
    todoList.push( task );
}

//removes the first value and return it 
function getTask() {
    return todoList.shift();
}

//put one value in the first index of the array
function rememberUrgently( task ) {
    todoList.unshift( task );
}

//adding the values in the array
remember( "js" );
remember( "html" );
remember( "css" );

console.log( todoList );

//removing and returning the values
console.log( getTask() );
console.log( getTask() );

//putting the value in the first index of the array
rememberUrgently( "JS basics" );

console.log( todoList );


//searching the array
console.log( todoList.indexOf( "css" ) );

//adding the values in the array
remember( "webDev" );
remember( "Eat" );
remember( "Shower" );

//searching the array but from the enf instead 
console.log( todoList.lastIndexOf( "Eat" ) );


console.log( todoList );

//returns the range given with the first parameter in but the second out
console.log( todoList.slice( 1, 3 ) );