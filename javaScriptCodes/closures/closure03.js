function sendEmail( from, sub, message ) {
    let msg = `"${ sub }" > "${ message }" received from ${ from }.`;
    
    let send = function () {
        console.log( msg );
    };

    return send;
}

//create a reference to sendEmail
let reference = sendEmail( 'Lisa', 're: Metting on Monday', 'Lucas you must be there on Monday' );

//call by reference
reference();