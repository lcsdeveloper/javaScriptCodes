class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`the ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);

killerRabbit.teeth="long, sharp, and bloody";
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth)
