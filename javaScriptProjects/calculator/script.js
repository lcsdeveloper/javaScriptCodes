/*
I did this code only for learn how to use arrow functions,
maybe in the future i come back and use DOM to get the values
*/

const sum = (num1, num2) => {
	return num1 + num2;
};

const subtraction = (num1, num2) => {
	return num1 - num2;
};

const divided = (num1, num2) => {
	if (num1 > 0 && num2 > 0) {
		return num1 / num2;
	} else {
		return 0;
	}
};

const multiply = (num1, num2) => {
	return num1 * num2;
};

console.log(divided(9, 3));
console.log(multiply(3, 10));
console.log(sum(50, 50));
console.log(subtraction(1000, 100));
