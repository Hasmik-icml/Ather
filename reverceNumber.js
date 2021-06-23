let number = 8108;
let b = 0 , a;
if (number > 9){
  for(;;){
       
      a = number % 10;//1
      b = b * 10 + a;//10
      number = Math.floor(number / 10);//8
   if (number == 0){
      break;
    }
  }
console.log(b);
} else {
  console.log(number);
}

