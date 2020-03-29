function printFarmInventory(cows, chickens) {
  let cowString = String(cows);

  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`); //out put

  let chickenString = String(chickens);

  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }

  console.log(`${chickenString} Chickens`);
}

console.log(printFarmInventory(7,11));