# Functions

```js
// Normal Fucntion
function printMessage(){
     console.log("what is the cost of lies ")
}
// Function take parameters 
function sum( x, y )
{
console.log(x+y)
}
sum(2,4)

pringMessage() // this how we call function in the same file of code we can call it in console like this

// Function With Return Value 
function SUM(j,k)
{
    return j+k
}
SUM(2,4) // output will be 6 you can use the output anywhere
```

## Length of String and character place
### Examples
```js
function len(n) // this function used in get the length of string
{
    return n.length
}
function really (m) // this function is used to get spacific place element in string
{
    return m[0] // remember string are array of characters
}
```
## Arguemnts in Functions
- is a like array 
- you can't use array methods with it " There is a Playaround to handle this "
```javascript

  function sum () {
    console.log(arguments.length) 
    return 0;
  }
  sum(); // 0
  sum(2,3,41,41); // 4 

```

# Function expression 
```js
var sum = function os(){
  
};
sum();
var sum = function (){};

````
# Anonymous Functions
```js
    // here is normal function
    function text(x , y){
        console.log(x + y)
    }
    let x = text() // this gonna make the function work
    let x = text // this make x a function to use
    x(2,3)
    
    let y = function(){
        console.log("hey")
    }
    // this is function take another fucntion as parameter
    // we call it high order function 
    function callAnotherFunction(functionToCall){
        console.log("whatisthecostofeliese")
        functionToCall()
    }
    callAnotherFucnction(function(){
        //this is the Anonymous Function
    })
	function wachingMachine(mode){
	if(mode==1){
		return function(){console.log("waching first");
	}
} 
	// calling inside function
	wachingMachine(2)();
	// or 
	
	function wachingMachine(mode){
	if(mode==1){
		return function(){console.log("waching first")}(); // IIFE Immediatly Invoked Function Expressions
	}


	wachingMachine(1);

// another one
	(function(){
	console.log("hey");
	})(); // this one time called function like any anonymouse









```
## Usage
- 
```js
            // this function will start after spacific time "ms"
    setTimeout(function(){//code here} , 3000)
//this function work every spacific time it's loop 
    setInterval(function(){//code here }, 3000)
//
        // this function take function that should have parapemter to loop over the each element in the array 
        let arr=[1,2,3]
arr.forEach(function(element){console.log(element)}) // this gonna print 1 2 3 on the console 
```



# Arrow Function

```js
let x = () => {
    // code here  
}
// work with ES6  
```
# CallBack Fucntion 
- هي دالة ترسل لدالة اخرى 
```js 
function sum(firstNumber , secondNumber){
    return firstNumber + secondNumber 
}
                                            // sum or any thing you already declare
function operation (first, second , callBackfunction){
    return `[${callBackfunction(fist,second)}]` // it return string cause of ` ` 
}
console.log(operation(2,5,sum))
// other methods to do this 
// this if you wann use function just once  but if you usese it alot use the first case by declare it out side and call it back
console.log(operation( 2, 4 , function (fristNumber , secondNumber) {
    return firstNumber + secondNumber 
}))
operation(2, 4, (first, second) => {
return first - second
})
// or if it just one line 
operation(2, 4, (first, second) => first - second)


// another shrotcut
const sum = (first, second) => first - second


// Text Style in CallBackFunction
function format(text, formatFunction){
    return formatFucntion(text)
}

function htmlFormat(text){
    return `<div>${text}</div>`
}
function jsonFormat(text){
    return `{"text" : ${text}}`
}
format("what is the cost of lies " , jsonFormat)
//reuslt : {"text" : "what is the cost of lies "}




```
