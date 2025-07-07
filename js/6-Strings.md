# String

# Backtich Or Template Literals 
- when we type 
  
  - `half of 100 is ${100 / 2}` 
  - the result is -> half of 100 is 50
  - ${} make a computaion and return a string 
  - let y = 20;
  - let x = ` what is ${y}` // what is 20
```js
// Methods
var title =" hello world"
title.substring(0 , 4) // this take from h to o  so the op is "hell" بيطبع لحد الرقم اللي قبل الاخير 

console.log(title.substring(7, 9))
//----------------
// اي حاجة عايز تطبعها استخد console.log 
title.length // give the length of string 
title.toUpperCase()
title.toLowerCase()
title.replace("hello", "what A ") // this case sensitive 
title.charAt(1)// e
title[1] //e
/* -------------------------- */
// user reverse in strings 
// firts transform string to array 
s.split("").reverse().join("");
// then reverse the array this function work with arrays 
// last we use joing to connect the charachter in array and make it string again 
//--------------------------------
```