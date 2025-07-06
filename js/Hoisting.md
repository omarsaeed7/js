# Hoisting 
> is the way that js read your file and initialize the variables and functions but not declare it 
```js

// if we want to use those variables and functions before the start like this 

console.log(test); // this will work 
console.log(num); // this will not work cause let 
dodge(); // this will work 
myFun(); // this not going to work cause the hositing just take the variable name not the value inside it 
var test = 30;
let num = 20;

function dodge (){
  console.log("hello");
}
let myFun = () => 20;
```