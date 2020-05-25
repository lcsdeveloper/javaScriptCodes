//create a custom constructor
let Pancake = function () {
    //create an object property
    this.number = 0;
    //create an object method
    this.bake = function () {
        console.log( "baking the pancake..." );
        this.number++;
    };
};

//instantiate pancake maker:
let pancake = new Pancake();

//baking three cakes 
for ( let i = 0; i < 3; i++ ) pancake.bake();

console.log(pancake.number);