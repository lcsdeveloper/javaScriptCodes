const name = 'Lucas';
const concat = 'Hello ' + name + '!';

const templateS = `
    Hello
    ${name}!`;

console.log(concat, templateS);

//expressions
console.log(`1 + 1 = ${1 + 1}`);

const up = text => text.toUpperCase();
console.log(`Hey... ${up('caution')}!`);