//in this func i used the "parametro padrao nos valores"
function rand({ min = 0, max = 1000 }) {
	const value = Math.random() * (max - min) + min;
	return Math.floor(value);
}

const obj = { max: 1, min: 6 };

console.log(rand(obj)); //passing the full obj
console.log(rand({ min: 955 })); //passing only one attribute
console.log(rand({})); // just calling the func with value 
