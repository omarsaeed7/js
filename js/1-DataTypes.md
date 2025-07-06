# Var , Let, Const

```js
    // var is the old way to declare the variables also var didn't take care about scope but it care about the function scope 
    
    function test (x = 10){
      if (x < 12) {
      var y = 20;
      let z = 30;
      }
      console.log(y,z); // you can't see the z but you can see the y 
    }
    
    // now we use let
    let x =20
    // let is function and block scope 
    // That means you can't access it out side block or fucntion block {}
    
    //this is constant number you can't change its value
    // also like let in Scope 
    const b=
    
    var x ="what is the cost of lies" //String
    var y =8 // Number
                        //Backticks ` `  String With Variables
    var ThisContainVariable = ` x : ${x} \n y:${y}` 
    // typeof is used to check Data Type
    console.log(typeof "hwll")//the answer will be string 
    console.log(typeof x)//this willl print string 


    var name = "what"
    name = 100 
    /* here in js we can change the type of datatype 
    This called :
    Dynamically type Language
    */ 
```



# Numbers
- you can represent numbers by add e
    - 2.899e3 -> 2.899 * 10^3
```js

// METOHDS
// isNaN(Variable) // check if it's number or not a number
let x = 1
let y = 2
Math.min(x, y, 2 ,2 ,23,4 ,4 ) // check the minimum number
Math.max()
//Math is a library containe alot of methods like sin cos etc .. 
```

# Boolean
- NaN data type is not equal to each other
- NaN is supposed to denote the result of a nonsensical computation,
and as such, it isn’t equal to the result of any other nonsensical com-
putations.
- رقم مش رقم ف احنا مش عارفينه فهو مش هساوي رقم تاني احنا برضه مش عارفينه , منطقي
console.log(NaN == NaN)
// → false
```js
let x = true
let x = false
```


# Casting
```js
// تحويل نوع قيمة 
Number(variable)// casting variable to number 
parseInt(variable)// casting variable or whatever inside to integer
String(variable) // casting to string 
x.toString()
Boolean(variable)
```
# Primitive Types
- String => 'name', "hey", `test`
- Numbers => 2 , 2.3 , -2 , -23.23 
- boolean => true, false  , 0 ,1 
- null => the variable is empty 
- NAN
- sympol
- undefined => i don't know what inside the variable 
```js
typeof(variableName); // show the type of the variable
```

# Non Primitive Types 
- Objects 
- Functions
- Arrays 
- Dates
- Keyed Collections 
  - Maps
  - Weak Maps
  - Sets 
  - Weak Sets
 
# Another Classification 
- Mutable 
  > You can change a part of the value 
    objects , arrays 
    
- Immutable
  > The value is a hole mass 
    number , string , boolean 