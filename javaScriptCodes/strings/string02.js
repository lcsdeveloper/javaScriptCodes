let sentence = "Secretarybirds specialize in stomping";

console.log(sentence);

//using split to separe the string where it finds the " "
let words = sentence.split(" ");

console.log(words);

//using join to re-do the string
 console.log(words.join(" "));

//using the repeat to clone the string 
//  console.log(sentence.repeat(4));


//it was just a test because i was corious 
let foundWord = 0;
for(i of sentence.toLowerCase()){
    if(i === "s" /*|| i === "S"*/){
        console.log("achei um s");
        foundWord ++
    }
}

console.log(foundWord);