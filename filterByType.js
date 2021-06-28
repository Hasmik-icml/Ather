// 1-ին տարբերակ
function filterByType(arr) {
  let numbers = [];
  let numbersString = [];
  let string = [];

    for (let i = 0; i < arr.length; ++i){
      if (typeof arr[i] == "number") {
          numbers.push(arr[i]);
      } else 
      if (Number(arr[i])){
        numbersString.push(arr[i]);
      } else 
      if (typeof arr[i] == "string") {
        let count = 0;
        for (let j = 0; j < arr[i].length; ++j){
            if (arr[i][j] !== " "){
              count ++;
            }
        }
        if (count > 5){
          string.push(arr[i]);
        }
      }
    }

    return {
      numbers,
      numbersString,
      string
    }
}
console.log(filterByType([1,2,"3","abc de","abcdef"]));


// 2-րդ տարբերակ

function filterByType(arr) {
  let object = {
    numbers: [],
    numbersString: [],
    string: []
  };

  for (let i = 0; i < arr.length; ++i) {
    if (typeof arr[i] == "number") {
      object.numbers.push(arr[i]);
    } else 
    if (Number(arr[i])) {
      object.numbersString.push(arr[i]);
    } else 
    if (typeof arr[i] == "string" && arr[i].split(" ").join("").length > 5){
      object.string.push(arr[i]);
    }
  }
  return object;
}

console.log(filterByType([1,2,"3","abc de","abcdef"]));

