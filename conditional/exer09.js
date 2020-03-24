let a = 4,
  b = 5,
  c = 2;

if (a < b + c && b < a + c && c < a + b) {
  if (a == b && b == c) {
    console.log("triangulo equilatero");
  } else if (a == b || a == c || c == b) {
    console.log("triangulo isosceles");
  } else {
    console.log("triangulo escaleno");
  }
} else {
  console.log("nao e um triangulo");
}
