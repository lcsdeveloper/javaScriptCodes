function makeBetweenFunc (x,y){
    return function(num){
        return num >= x && num <= y;
    };
}

const isChild = makeBetweenFunc(0,18);
const isInNineties = makeBetweenFunc(1990,2000);
 
console.log(isChild(17));
console.log(isChild(20));
console.log(isInNineties(1800));
console.log(isInNineties(1999));
