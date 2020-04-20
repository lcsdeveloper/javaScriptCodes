let print, set, increase, decrease;

function manager() {
    console.log( "manager()" );

    let number = 15;

    print = function () {
        console.log( number );
    };

    set = function ( value ) {
        number = value;
    };

    increase = function () {
        number++;
    };

    decrease = function () {
        number--;
    };
}

manager(); //initialize manager

print(); //15

//calling increase() 200 times
for ( let i = 0; i < 200; i++ ) {
    increase();
}
print(); //215

//calling decrease()
decrease();
print(); //214

//calling set and givint it a number
set( 755 );
print(); //755

//saving a reference for print()
let oldPrint = print;

//initialize manager (again)
manager();

print();//15
oldPrint();//755