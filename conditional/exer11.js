let time = 90,
    speed = 120,
    distance, spentFuel;

distance = time * speed;
spentFuel = distance / 12;

console.log( `Speed: ${speed}
time traveling: ${time} minutes
distance: ${distance} 
Fuel spent: ${spentFuel} liters ` );