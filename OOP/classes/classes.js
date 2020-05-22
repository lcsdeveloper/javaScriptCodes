function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

function Rabbit(type){
    this.type=type;
}

Rabbit.prototype.speak = function(line){
    console.log(`the ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");