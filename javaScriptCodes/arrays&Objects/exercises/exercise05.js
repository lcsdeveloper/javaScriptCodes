let arrayValue = [
	1,
	2,
	3,
	4,
	5
];

// function reverseArray(arr) {
//     let arrayReversed = [];

//     for (let i of arr) {
//         arrayReversed.unshift(i);
//     }
//     return arrayReversed;
// }

function reverseArrayInPlace(arr) {
	for (let i = 0; i < Math.floor(arr.length / 2); i++) {
		let old = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = old;
	}
	return arr;
}

reverseArrayInPlace(arrayValue);
console.log(arrayValue);
console.log(
	reverseArray([
		'a',
		'b',
		'c'
	])
);
