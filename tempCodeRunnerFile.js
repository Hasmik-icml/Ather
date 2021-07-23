// 2րդ տարբերակ
function sort(field, type){

if (type === "DESC"){
	user.sort(function(a, b){return b - a});
	
// 	for (let i = 0; i < user.length; ++i){
// 		for (let i = 0; i < user.length-1; ++i){

// 			if (user[i][field] < user[i + 1][field]){
// 				let temp = user[i][field];
// 				user[i][field] = user[i + 1][field];
// 				user[i + 1][field] = temp;
// 			}
// 		}
// }
// } else if (type === "ASC") {

// 	for (let i = 0; i < user.length; ++i){
// 		for (let i = 0; i < user.length-1; ++i){
	
// 			if (user[i][field] > user[i + 1][field]){
// 				let temp = user[i][field];
// 				user[i][field] = user[i + 1][field];
// 				user[i + 1][field] = temp;
// 			}
// 		}
// 	}
// }
	return user;
}

console.log(sort("name", "DESC"));
