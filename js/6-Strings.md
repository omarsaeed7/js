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
// return new string not affect the concrete string 
title.toUpperCase()
// return new string not affect the concrete string 
title.toLowerCase()
title.replace("hello", "what A ") // this case sensitive 
title.charAt(1)// e // it takes the index number 
title[1] //e // this is the array method to get the character 
title.charCodeAt(1) // return the ASCII code of the character 
title.charCodeAt(1).toString(16) // this is the ASCII code

//=============
let title = "aAb"
undefined
title.charCodeAt(1).toString(16)
'41'
"\x41"
'A'
//=============

/* -------------------------- */
// user reverse in strings 
// firts transform string to array 
s.split("").reverse().join("");
// then reverse the array this function work with arrays 
// last we use joing to connect the charachter in array and make it string again 
//--------------------------------
```

# Search In String 

```js
title = "hello"
'hello'
title.indexOf("e")
1
title.indexOf("e",2) // start from index number 2 
-1 // not found 
title.lastIndexOf('l') // start from the end of the string 
3 
title.includes('lo') // return true or false if the string include that char
true

```

# Slicing String 
```js 
title = "hello";
title.slice(1,3)
'el'
title.substring(1,3)
'el'
title.substring(3,1) // it will substitute the numbers based on who is greater than 
// slice() will not do this it will return empty string 
'el'
title.slice(-3,-1) // it will add to the number the length of the string 
// substring will not accept the negative values 
'll'
/* Substr is deprecated Don't Use It */
title.substr(2,3) // 2 => start index 3 => length to cut 
'llo'
title.substr(-2,10)
'lo'
title.substr(1,2)
'el'
title.split(2,3);

title.split("e")
[ 'h', 'llo' ]
title.split("h")
[ '', 'ello' ]
title.split('')
[ 'h', 'e', 'l', 'l', 'o' ]
title.split('',2)
[ 'h', 'e' ]
title.split('',3)
[ 'h', 'e', 'l' ]

title.trim();// remove spaces in whole string 
title.trimStart() // remove the spaces at the start of the string only 
title.trimEnd()// remove the spaces at the end of the string only 

````

# Compare Strings 

```js 
let title = "hello";
let title2 = "hola";
title.localeCompare(title2)
-1 // title2 after title in alpha order 
1 // if the title after the title2 in alpha order 
0 // if they are the same 
````
  