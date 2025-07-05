function power (x,y){
  let sum = 1;
  for (let i = 0; i < y; i++){
    sum *= x;
  }
  return sum;
}
console.log(power(2, 3));