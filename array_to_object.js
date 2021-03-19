const convert = (arr) => {
	let outputObj = {};
	if(!(Array.isArray(arr))) return null
	if(arr.length == 0) return null;
	for(let i=0;i<arr.length;i++){
		outputObj[arr[i].role] = arr[i];
	
	}
	return outputObj;
};
