# Dates 
```js
// 10/17/2022   month/dd/yyyy
// month and days start from 0 so october will be 9 + 1

const d = new Date(2020, 9, 17)
d.getDate() // 9/17/2020 غالباً
d.getMonth() // 9
d.getDay() //17
d.getYear() //2020

```
# Numbers
```js
const number = 9.12
Math.ceil(number)// 10 يقرب لاقرب عدد صحيح كبير
Math.floor(number) // 9 العكس

Math.round(number) // يقرب التقريب اللي عارفينه = 9

Math.abs(-8) // 8 absolute value

// Min | Max
const numbers = [3, 3 ,3 ,5 ,16 ,6 ]
const smallNum= Math.min(...numbers)//destructuring the array 
//min return lowest number in array
console.log(smallNum) // 3
console.log(Math.max(...numbers))// 16

// extract float from string
let str = '1.35'
parseFloat(str) // 1.35
let str = '322'
parseInt(str) // 322

// remove float point
Math.trunc(4.21) // 4 

// Check Data Type

Number.isInteger(4)// true
isNan(number) // return true of false 
// true if number wasn't number

//---------------
const number = 2 ** 3 // 8 الأس

Math.pow(2,3) // الأس برضه 

// الجذر التربيعي
let number =16
Math.sqrt(number) // 4

Math.sign(number) // return 1 if number is positive | return 0 if number is negative | return NaN if it was string | 0 is 0 

// Generate Random Number
Math.random() 
// it return Random Number from 0 to 1 

let num = 214_24_234 // it just for you and not affect the number  21424234 is the resutl


```
# Represent Numbers With Hex , Octal And Binary
```js
let age = 0xe // 14 Hexa Decimal
let age = 0o16// 14 Octal
let age = 0b1110 // 14 Binary

// Trasnfomation 
let age = 12
age.toString(2) //1100 

```