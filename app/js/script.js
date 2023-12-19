// Sorting an array of numbers
const numbers = [3, 5, 6, 4, 1, 2];
for (let i = 0; i < numbers.length - 1; i++) {
	for (let j = i + 1; j < numbers.length; j++) {
		if (numbers[i] > numbers[j]) {
			const temp = numbers[j];
			numbers[j] = numbers[i];
			numbers[i] = temp;
		}
	}
}
console.log("numbers:", numbers);


// function definition
function hello() {
	console.log("Hello");
}
// function call
hello();