//first example of lexical scope
function outer(){
    let movie = 'Amadeus';
    function inner(){
        console.log(movie.toUpperCase());
    }
    inner();
}

// one more example of lexical even deeper
function outer(){
    let movie = 'Amadeus';
    function inner(){
        let movie = 'shinning';
        function extraInner(){
            console.log(movie.toUpperCase()); // this is gonna search for the nearst let movie which is from inner()
        }
        extraInner();
    }
    inner();
}