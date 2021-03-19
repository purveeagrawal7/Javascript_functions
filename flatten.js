/* Write a Program to Flatten a given n-dimensional array */
let finalArray = [];
const flatten = (arr) => {
	// Write your code here
	if(!(Array.isArray(arr))) return null;
	for( let i = 0; i< arr.length; i++) {
		if(Array.isArray(arr[i])) {
			flatten(arr[i])
		}
		else{
			finalArray.push(arr[i]);
		}
	}
	return finalArray;
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
