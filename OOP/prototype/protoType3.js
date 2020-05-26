let cat = {};

cat.name = "felix";
cat.hunger = 0;
cat.energy = 0;
cat.state = "indle";

//sleep  to restore energy
cat.sleep = function () {
  this.state = "sleeping";
  console.log(`${this.name} is ${this.state}.`);
  this.energy += 1;
  this.hunger += 1;
};

//wake up
cat.wakeUp = function () {
  this.state = "idle";
  console.log(`${this.name} woke up.`);
};

//eat until hunger is quenched
cat.eat = function () {
  this.state = "eating";
  console.log(`${this.name} is ${this.state}
    ${amount} unit(s) of food`);

  if ((this.hunger -= amount <= 0)) this.energy += amount;
  else this.wakeUp();
};

//wandering depletes energy,
//if necessary, sleep for 5 hours 
