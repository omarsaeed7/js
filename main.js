
console.log(test); // this will work 
// console.log(num); // this will not work cause let 
dodge(); // this will work 
// myFun(); // this not going to work cause the hositing just take the variable name not the value inside it 
var test = 30;
let num = 20;

function dodge (){
  console.log("hello");
}
let myFun = () => 20;