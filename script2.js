let num = 266219;
let number = String(num);
let sum = 1;



for(let i = 0; i < number.length; i++){

 sum = sum* number[i]
  
  console.log(sum);
}



 

num **= 2;
console.log(num);

let screen = String(num).slice(0,2);

alert(screen);