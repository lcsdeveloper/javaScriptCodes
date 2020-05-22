function mult(a, b) {
  console.log(a * b);
}

function sum(a, b) {
  console.log(a + b);
}

function sub(a, b) {
  console.log(a - b);
}

function div(a, b) {
  console.log(a / b);
}

const cal = { mult, sum, sub, div };

cal.mult(2, 4);
cal.div(4,2)
cal.sub(8,5)
cal.sum(5,5)