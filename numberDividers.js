function numberDividers(num) {
  let array = [];
  for (let i = 2; i <= num; ++i ) {
    if (num % i == 0) {
      array.push(i);
    }
  }
  return array;
}
console.log(numberDividers(112));

