class Animal {
  constructor(name, type, height, makeSound) {
    (this.name = name), (this.type = type), (this.height = height);
    this.makeSound = () => console.log("Hey I am a mammal");
  }
}

const dog = new Animal("lili", "mammal", 60);
const cat = new Animal("pit", "white", 15);

console.log(dog.name);
console.log(dog.height);
console.log(cat.name);
console.log(cat.height);
cat.makeSound()

