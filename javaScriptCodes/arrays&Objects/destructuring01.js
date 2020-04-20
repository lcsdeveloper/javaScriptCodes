const person = {
	name: 'ana',
	age: 25,
	address: {
		street: 'street one back yard',
		number: 1550
	}
};

//using destructuring to grab the attributes
const {
	name,
	age
} = person;
console.log( name, age );

//changing the name of the let/var for grabbing the attributes
const {
	name: pName,
	age: pAge
} = person;
console.log( pName, pAge );

//using destructuring to grab the nested attributes
const {
	address: {
		street,
		number
	}
} = person;
console.log( street, number );