for ( let alerts = 0; alerts < 4; alerts++ ) {
    let one = ( alerts == 1 );
    let is = one ? "is" : "are";
    let s = one == 1 ? "" : "s";

    let message = `there ${ is } ${ alerts } alert${ s }.`;

    console.log( message );
}