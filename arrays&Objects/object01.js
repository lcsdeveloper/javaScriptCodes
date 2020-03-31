let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel); // calling squirrel property

console.log(day1.wolf); // testing an undefined propert

day1.wolf = false; // setting a new property after the object was created 

console.log(day1.wolf); // calling the property after setting it 

console.log(Object.keys(day1)); // show every properties frm the object

 const copyObj = Object.assign(day1); // copy/replace a whole object properties in another object

console.log(copyObj); // showing the copy of the day1 obj