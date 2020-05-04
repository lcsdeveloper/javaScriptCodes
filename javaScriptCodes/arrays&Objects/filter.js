let array = ["rice", 10, "beans",20, true];

const grabString = element =>{
    if (typeof element == "string" || typeof element == "number")
    return element;
};

let arrayString = array.filter(grabString);

console.log(arrayString);