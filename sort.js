const log = console.log;

let user = [
	{name: "Anun3", followers: 1200, year: 1980},
	{name: "Anun1", followers: 1265, year: 1991},
	{name: "Anun2", followers: 980, year: 2000},
	{name: "Anun4", followers: 260, year: 1997},
];

function sort(field, type){

if (type === "DESC"){
	for (let i = 0; i < user.length; ++i){
		for (let i = 0; i < user.length-1; ++i){

			if (user[i][field] < user[i + 1][field]){
				let temp = user[i][field];
				user[i][field] = user[i + 1][field];
				user[i + 1][field] = temp;
			}
		}
}
} else if (type === "ASC") {

	for (let i = 0; i < user.length; ++i){
		for (let i = 0; i < user.length-1; ++i){
	
			if (user[i][field] > user[i + 1][field]){
				let temp = user[i][field];
				user[i][field] = user[i + 1][field];
				user[i + 1][field] = temp;
			}
		}
	}
}
	return user;
}

log(sort("name", "DESC"));


