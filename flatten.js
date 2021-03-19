let finalArray = [];
const flatten = (arr) => {
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
module.exports = flatten;
