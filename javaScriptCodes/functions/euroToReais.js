const euro = 5.89;
//read real 
let real = 1000;

const convertReal = value => value / euro;

const realConverted = convertReal(real);

console.log(`You have R$${real} reais what is equal to €${realConverted.toFixed(2)} euros`);