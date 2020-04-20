//the function global() is defined in an already existing
//execution that was created together with window
function global () {
    //inner only exist in a global() scope what means it only
    //exist if global() is called otherwise it will not exist outside 
    function inner() {
        console.log( "inner" );
    }

    // console.log("global is running"); just a test
    inner(); //call inner 
}

global(); //global call