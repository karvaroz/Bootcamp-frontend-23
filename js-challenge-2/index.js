// Get smallest number in the array
let arr1 = [12, 6, 10, 2, 45, 100];
let smallest = arr1.reduce((acc, value) => Math.min(acc, value));
console.log("El menor número del array es: ", smallest);

// Find the least frequent item in the array
let arr2 = [3, "c", "c", "a", 2, 3, "c", 3, "c", 2, 4, 9, 9];
const occurs = {};

for (const item of arr2) {
	if (occurs[item]) occurs[item]++;
	else occurs[item] = 1;
}
let keys = Object.keys(occurs);
let values = Object.values(occurs)
let min = Math.min(...values)
let leastFreq = values.findIndex((x) => { return x == min })
console.log(occurs);



// Write a JS program to remove duplicates in an array.
let arr3 = [7, 9, 1, "a", "a", "f", 9, 4, 2, "d", "d"];
let arr3Result = [];

arr3.forEach((e) => {
	if (!arr3Result.includes(e)) {
		arr3Result.push(e);
	}
});
console.log(`Array con duplicados ${arr3}`);
console.log(`Array sin duplicados ${arr3Result}`);

// Write a JS program to concat arrays.

const data = [
	["The", "little", "horse"],
	["Plane", "over", "the", "ocean"],
	["Chocolate", "ice", "cream", "is", "awesome"],
	["this", "is", "a", "long", "sentence"],
];
const result = data.map((item) => item.reduce((acc, item) => `${acc} ${item}`));
console.log(result);
