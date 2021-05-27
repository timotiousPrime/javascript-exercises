function add (x,y) {
	return x + y 
}

function subtract (x, y) {
	return x - y
}

function sum (array) {
	
	let result = array.reduce( (acc, num) => acc + num, 0)
	console.log(result)
	return result
}

function multiply (array) {
	let result = array.reduce( (acc, num) => acc * num, 1)
	return result
	
}

function power(x, y) {
	return Math.pow(x, y)
	
}

function factorial(x) {
	let array = [];
	for (let i = 1; i <= x; i++ ) {
		array.push(i)
	}
	
	result = array.reduce( (acc, num) => acc * num, 1)
	return result
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}