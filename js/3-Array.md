# Array
```js
let NameOfArray = [2,3,5,6,7,7,7,2,14,134,134]
console.log(NameOfArray.length) // Get the number of array indexes 
// output 11

/* Methods of Arrays */
let colors=['green','blue','black']
colors.pop() // Delete element from the last of the array
console.log(colors)
colors.push('yellow') // Add element to the last of the array

colors.shift()  // Delete Element from the begining of the array
console.log(colors)
colors.unshift("Red") // Add new element to the begining of the array
console.log(colors)

colors.splice(2) // this method delete element by index number  Notice this will delete also every thinge after index 2
    /* IndexNumber=2 NumberOfDeleteItems=1*/
colors.splice(2,1)//this will delete the only one index 
colors.splice(2,1,"omar")// last one add over the deleted item
// if you make the deleted item 0 this will add item to the spacific index without deleting items

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