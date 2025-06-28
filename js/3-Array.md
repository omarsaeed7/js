# Array
## Declare Array 
```javascript
// Dense array 

var myarr = []; // create empty array length = 0
var myarr = [1,2,3,4]; // create object array with length 4 with data inside 
var myarr = new Array(); // create empty array object  length = 0
var myarr = new Array(5); // create objec array with length 5 data initialized by 'undefined'
var myarr = new Array(2,3,4,5); // create an object from type array with length 4 initialized by passed data

typeof(myarr) ; // => object 
myarr.constructor.name; // => 'Array'

  myarr[0] =313;
// 313
  myarr
// [ 313, 3, 4, 5 ]
  myarr[4]= 231; // not recommended to add element with this way // cause it will add undefiend indexes until reaching your index 
  // 231
  myarr
 // [ 313, 3, 4, 5, 231 ]
 // 
 delete myarr[0]; // not recommended to delete item with this way 
 // true
 myarr
 // [ <1 empty item>, 3, 4, 5, 231 ]
 // 
// Associative array 

  var arr = [];
  arr["id"] = 10;
  arr["name"] ="omar";
  arr
  // [ id: 2, name: 'omar' ]
  // To loop over Associative array 
  // i => represent the key // arr[i] => represent the valeu of the key
  for(var i in arr){ console.log(arr[i])}
  // 2
  // omar
```


```js
let NameOfArray = [2,3,5,6,7,7,7,2,14,134,134]
console.log(NameOfArray.length) // Get the number of array indexes 
// output 11

/* Methods of Arrays */
let colors=['green','blue','black']
colors.pop() // Delete element from the end of the array // return the deleted element
console.log(colors)
colors.push('yellow') // Add element to the end of the array // return the number of the  elements in array

// colors.shift()  // Delete Element from the begining of the array // return the deleted element
// console.log(colors)
// colors.unshift("Red") // Add new element to the begining of the array // return the number of elements in array
// console.log(colors)




/*
* this method delete element by index number  Notice this will delete also every thinge after index 2
* @return the deleted items []
*/
colors.splice(2) 

    /* IndexNumber=2 NumberOfDeleteItems=1*/
// Delete from index 2 with 1 element only
colors.splice(2,1)//this will delete the only one index 

// Delete from index 2 with 1 element and add element 
// [ 'Red', 'Black', 'Green', 'Blue', 'Purple' ]
colors.splice(2,1,"omar")// last one add over the deleted item
// [ 'Red', 'Black', 'omar', 'Blue', 'Purple' ]

// if you make the deleted item 0 this will add item to the spacific index without deleting items
colors.splice(2,0,"omar");
//[ 'Red', 'Black', 'omar', 'omar' ]

// ===============
// > arr.splice(1,0,"hello")
// []
  arr
  // [ 'hello', id: 2, name: 'omar' ]
  arr.splice(1,"hello")
  // []
  arr
  // [ 'hello', id: 2, name: 'omar' ]
  arr.splice(1,0,25);
  // []
  arr
  // [ 'hello', 25, id: 2, name: 'omar' ]
  arr.splice(1,0,25);
  // []
  arr
  // [ 'hello', 25, 25, id: 2, name: 'omar' ]
  arr.splice(1,0,30);
  // // []
  arr
// [ 'hello', 30, 25, 25, id: 2, name: 'omar' ]
  arr.splice(1,3)
// [ 30, 25, 25 ]
  arr
// [ 'hello', id: 2, name: 'omar' ]

// 
// 
// 
// ====



colors.includes("Red") // check if array include spacific value
console.log(colors)
colors.reverse() // Reverse items in array

/* Methods built in for Array */

Concat() // Concatentation of two array

let arr_1=['wow','sheesh']
let arr_2=['wow','sheesh']
let arr_concat=arr_1.concat(arr_2)
console.log(arr_concat)
//---------------

// Join uset to connct String Of Array Char
join() // Used in join array item () " - , . " u can put the type of comma between the items

console.log(string.join('0'))

split() // Cut the array like u want by adding the char that u want to cut and split

let split_1=arr_1.join('0')
console.log(split_1.split('0'))


function addItemToArray(colors,newItem)
{
    colors.unshift(newItem)
    return colors
}
```

## You Can Put Object And Array inside Array


```js
let array = [
    2, 
    { 
        a: 2, 
        b: "Omar", 
        c:function(){
            //code here
         } } 
]
```
## Transfare array items to new one

```js
// This function return new array with edit items from other array or just transfare item without edit.

function makeNew(arr) 
{
    let newarr=[]
    for(let i=0; i<arr.length;i++)
    {
        newarr[i]=arr[i]*2
        // newarr.push(arr[i]*2) //Other solution
    }
    return newarr
}
```

## Use Split() Function to Convert String To Array

```js
function convertStringToArray(str)
{
    let ArrayOfString=str.split(" ") // This Split The string when it find Space if u wanna change the method of split u can change the value inside the parentheses
    return ArrayOfString
}
```

# Array In Advanced

```js
// ForEach()  // Used to go throw all element in array and print or do operation on it
// Synatax
arrayName.forEach(function(element, index){
    console.log(element)
})
// Or                       this is a Function but a Shortcut
arrayName.forEach((element,index)=>{

})

// filter() // بتفلتر المصفوفة بناء على شرط معين
arrayName.filter(()=>{

    return condition
})

// map() //تستخدم لو انت عايز تعدل على مصفوفة و تحطها في مصفوفة تانية
arrayname.map(()=>{
    return NewValue
})

// find() // return the first element that achieve the condition
arrayName.find(()=>{
    return conidtion
})
```

# Array With Loops

```js
    // Control Display Content
    let arr = ["Omar","Moory", "Yaaw"]
    for(let x =0 ; x < arr.length; x++){

        console.log(arr[x] + " - ")
        if(arr[x][0]=="O"){
            console.log("arr[x]")
            break // here if the condition done the for loop will stop
        }
    }
      for(let x =0 ; x < arr.length; x++){

        console.log(arr[x] + " - ")
        if(arr[x][0]=="O"){
            console.log("arr[x]")
            continue // this will go for other iteration and not stop the loop هيطلع من اللفة دي بس
        }
        console.log("w")
    }
```

# map filter reduce Methods

```js
let arr = [1, 2, 3, 4 ,5]
    // this function take the element and done operation on it
let newArr = arr.map(function(element){
    return element * 10
})

let filterArray = arr.filter(function(x){
   /* if( x > 3){
        return true
    }
        return false
*/
return x >3 // if true it will return them
})
// Do Operation on 
let reduceArray = arr.reduce(function(x,y){})
    return x + y
```

# Sorting 
## sort()
- it update the original array 

## reverse()
- reverse the original array 
























```javascript
// [ 'Red', 'Black', 'omar', 'omar' ]
colors.sort() // update the original array 
// [ 'Black', 'Red', 'omar', 'omar' ]
var arr = [2,4,1,15,6,3,4,2];
// it sort with ASCII or UTF-16 encoding 
arr.sort()
  // [
  //   1, 15, 2, 2,
  //   3,  4, 4, 6
  // ]

// To sort numbers and objects 
// Use Callback function  
arr.sort((a,b)=>{return a-b}) // this for ascending sort 
  // [
  //   1, 2, 2,  3,
  //   4, 4, 6, 15
  // ]
console.table(arr)
  // ┌─────────┬────────┐
  // │ (index) │ Values │
  // ├─────────┼────────┤
  // │ 0       │ 1       │
  // │ 1       │ 2       │
  // │ 2       │ 2       │
  // │ 3       │ 3       │
  // │ 4       │ 4       │
  // │ 5       │ 4       │
  // │ 6       │ 6       │
  // │ 7       │ 15      │
  // └─────────┴────────┘
arr.sort((a,b)=>{return b-a}) // this for descending sort 
  // [
  //   15, 6, 4, 4,
  //    3, 2, 2, 1
  // ]
  // 
  // 
  // [
  //   1, 2, 2,  3,
  //   4, 4, 6, 15
  // ]
arr.reverse() // change on the original array
  // [
  //   15, 6, 4, 4,
  //    3, 2, 2, 1
  // ]

```

# filter() 
- return new array 
```javascript
// callback function of filter 
// function callback ()
> arr = [1,111,33,40,-11,60]
// [ 1, 111, 33, 40, -11, 60 ]
> var result= [];
// undefined
> function checkEven(val){
... if(val % 2) return true;
... else return false}
// undefined
> arr.filter(checkEven)
// [ 1, 111, 33, -11 ]
> arr
// [ 1, 111, 33, 40, -11, 60 ]

arr.filter((val) => {return val % 2 == 0})
  // [ 40, 60 ]
  // 
  arr.filter((val)=>{return val %2 ==0 }).forEach((val,index)=>{console.log(val,index)});
  // 40 0
  // 60 1
```

# slice()
- return new array 
- cut some values of the array 

```javascript

var arr = [ 1, 111, 33, 40, -11, 60 ];

var result = arr.slice(1,4);
 arr
// [ 1, 111, 33, 40, -11, 60 ]
 arr.slice(1,2)
// [ 111 ]
 arr.slice(1,4)
// [ 111, 33, 40 ]
```

# map()
- return new array 
- make operation on array and return new array 

```javascript

var names = ['omar','saeed','ahmad'];

names.map((val)=>{return val + "@gmail.com"})
[ 'omar@gmail.com', 'saeed@gmail.com', 'ahmad@gmail.com' ];
```


# reduce() & reduceRight()
- return new array 
- return sum of array i guess 

```javascript

 arr.reduce((previouseValue, nextValue)=>{return previouseValue+ nextValue})
// 234
 arr.reduce((previouseValue, nextValue)=>{return previouseValue+ nextValue},30)
// 264
// 
// 
// reduce right used mostly with strings 
var names = ['omar','saeed','ahmad'];
names.reduceRight((p,n)=>{return p+=n})
'ahmadsaeedomar'
> names.reduceRight((p,n)=>{return n+p})
'omarsaeedahmad'
```

# some() & every()
- return boolean
- some() => at least one condition occurs 
- every() => all element apply the condition 
```javascript
var arr = [ 1, 111, 33, 40, -11, 60 ];
arr.some((val) => {return val % 2 == 0});
arr.every((val) => {return val % 2 == 0});
 arr.some((val) => {return val % 2 == 0});
// true
 arr.every((val) => {return val % 2 == 0});
// false

```
# concat()
- return new array 
- add two array or more to one array 

```javascript


````
