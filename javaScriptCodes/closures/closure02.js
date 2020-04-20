function sendEmail( from, subject, message ) {
    let msg = `"${ subject }" > "${ message }" received from "${ from }."`;
    
    let send = function () {
        console.log( msg );
    };

    send();
}

sendEmail( 'Lucas', 're: Testing clousures', 'Good news seems to be working' );

// send(); we can not call send() in a global scope 