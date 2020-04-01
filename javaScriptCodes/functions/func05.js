
//example of arrow func
const power = (base, expoent)=>{
    let result = 1;
    for(let count = 0; count < expoent; count++){
        result *= base;
    }
    return result;
}


//example of arrow func with one parameter
const square1 = (x) => {return x*x;};

const square2 = x => x*x;

// example of arrow func with no parameter 
const horn = () => {
    console.log("toot");
}