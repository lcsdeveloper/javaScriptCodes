//placeholder for global getter function
let get = null;

function closure() {

    this.inc = 0;
    get = () => this.inc; //getter

    function increase() {
        this.inc++;
    }

    function decrease() {
        this.decrease--;
    }

    function set( value ) {
        this.inc = value;
    }

    function reset() {
        this.inc = 0;
    }

    function del() {
        delete this.inc; //becomes undefined
        this.inc = null; //additionally reset it to null
        console.log( "this.inc deleted" );
    }

    function readd() {
        //if null or undefined
        if ( !this.inc ) {
            this.inc = "re-added";
        }
    }

    //return all methods at once
    return [ increase, decrease, set, reset, del, readd ];
}

let f = closure();

//setting the methods on a global scope
let inc = f[ 0 ]; //< increase()
let dec = f[ 1 ]; //< decrease()
let set = f[ 2 ]; //< set()
let res = f[ 3 ]; //< reset()
let del = f[ 4 ]; //< delete()
let add = f[ 5 ]; //< readd()

//calling the methods and modify the hidden inc

inc(); //1
inc(); //2
inc(); //3

dec(); //2
get(); //2
set( 7 ); //7
get(); //7
res(); //0
get(); //0

//delete property
del( 0 );//null
get();//null

//read property inc
add();
get(); //re-added
res(); //0
inc(); //1
get(); //1