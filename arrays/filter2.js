let arr = [ 'apple', 'orange', 'pear' ];


//cleaner code
const findOrange = arr.filter(element => (element == 'orange') ?  element : null);

//normal code
// const findOrange = arr.filter( element => {
//     if ( element == 'orange' )
//         return element;
// } );

console.log(`${findOrange}
${arr}
`);