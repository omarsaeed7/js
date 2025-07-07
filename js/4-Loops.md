# Loops

```js
  for(let i = 0 ; i<=10; i ++){
    console.log("yaaaaaaaaaw")
    console.log(i)
}

// shortcut for for
// x here is index number or name 
for( let x in string){
    console.log(string[x])
}
let obj = {
  name : 'omar',
  age: 25
}

for (let index in obj) {
  console.log(index + " " + obj[index]);
}
let string=[1,3,4,"c",true]
// x here is " Value of index "
for ( let x of string){
    console.log(x)
}
```


# Loops And Function Practice

```js
let exer_1=["Raghad", "Khalid", "Suhaib", "Asma"] // Array
function takeArray(array){ // This Fuction Takes Array and Print It's Element
    for(i=0;i<array.length;i++)
    {
        console.log(array[i])
    }
}
takeNum(exer_1) // This how we Call Function and put the name of the array inside it

/* ----------------------------------- */

 // this fucntion print message before the array element
function Print(arr)
{
    for(i=0;i<arr.length;i++)
    {
        console.log("Welcome " + arr[i])
    }
}
Print(exer_1)

/* ------------------------------------ */

let exer_1=["Raghad", "Khalid", "Suhaib", "Asma"]
// This fucntion prints the length of item inside the array
function printLengthOfItem(arr) 
{
    for(i=0;i<arr.length;i++)
     {
        console.log(arr[i].length)// length of item
     }
}
printLengthOfItem(exer_1)

/* -------------------------*/

// This function edit the item inside the array
function editArrayItem(arr) 
{
    for(i=0;i<arr.length;i++)
     {
        arr[i]="Welcome "  + arr[i]// adding text 
        //arr[i] = "What is " //changing the value off all elements 
        console.log(arr[i])
     }
}
editArrayItem(exer_1)

/* ------------------------------ */

let number=[17,15,8,12,7,25,24]
// This fucntion divide the array element return the item that can divide by three
function divideByThree(arr)  
{
    for(i=0;i<arr.length;i++)
     {
        // Check if the item can be divided by 3 or not
        if(arr[i]%3 == 0){ 
            console.log(arr[i])
        }
     }
}
divideByThree(number)
```

# Loop Naming 

```js
outerLoop:
for ( let i = 0 ; i < 10 ; i++ ) {
  innerLoop:
  for ( let x = 0 ; x < 5 ; x++ ){
    console.log("hello " + x);
     if(x == 0) break outerLoop 
       else continue;
    }
}
```