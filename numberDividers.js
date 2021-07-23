
function numberDividers(num){
	const arr = [];
 
	for(let i=Math.floor(Math.sqrt(num)); i>1; i--){
		if(num % i == 0){
			arr.unshift(i)
			if(i != num/i){
				arr.push(num/i);
			}
		}
	}
 
	arr.push(num);
	return arr;
}
console.log(numberDividers(112));

