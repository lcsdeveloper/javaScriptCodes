let c = 0;

mark: for ( let i = 0; i < 5; i++ )
    inner: for ( let j = 0; j < 5; j++ ) {
        c++;
        if ( i == 2 )
            break mark;
    }

console.log( c ); //11

let y = 0;
mark: for ( let x = 0; x < 5; x++ )
    inner: for ( let z = 0; z < 5; z++ ) {
        y++;
        if ( x == 2 )
            break inner;
    }

console.log( y ); //21

block: {
    console.log("before");
    break block;
    console.log("after");
}