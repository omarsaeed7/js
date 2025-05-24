# forEach
```js
let arrayName = [2,3,1241];

		// currentVaule = Values inside the array 
		// index = index number like 0 1 2 3 .. 
		//array = the array itself
arrayName.forEach(function(currentValue, index, array){
	console.log(currentValue);
	console.log(index);
	console.log(array);
})

```
# some
- it return true or false based on the condition on it , it loop on the array
```js

const age = [213 ,213,1 51,512 ,15]
const hasAdult = age.some(function(element){return element >= 12});


```

# every
- it like some but it return true if **all** the element applied the condition

```js
age.every((element) => return element <= 10;)
```

# includes

- it check if the array contain spacific value 

```js 
cosnt i = arrayName.includes("red");

// 1 is the index to start from
// u can use negative values it start from the end of array
arrayName.includes('red', 1)

```
# indexOf & lastIndexOf
- they return the index number of the element
- indexOf start from the left to right
- lastIndexOf start from the right to left
- if the value not in the array the output will be -1
```js

const index = arrayName.indexOf("red");
const index = arrayName.lastIndexOf("red);
```
# findIndex
- it return the **first** index that fullfilled the codition
```js 
arrayName.findIndex(function(element){ return element <= 23 })
```
# find
- it return **first** elment that fullfilled the condition

```js
	arrayName.find((element) => {return element < 23 })
```
# filter
- it return array includes element that fullfilled the condition

```js 
arrayName.filter(function(element){return element < 3;})
```
# concat 
- it concat two array 
```js 
	let newArray = firstArray.concat(secondArray);
	// you can add new items 
	let newArray = firstArray.concat(secondArray, "ball" , "tall");
	let newArray = firstArray.concat("ball", "all");

```
# slice 
- it take a copy of elemen from spacifc index and number of elements to copy
```js
arrayName.slice(2,3); 
```

# splice 
## Read More about It 

------------------------------------------

# join
- it return string 
- the string is the concatination of the all of array
- you can use spacific separator - , . "space"
```js
array.join("")
```
# sort
- arrange item ascending from small to big
- it do it for string by alphabitic sort
- and for number from small to big

# reverse 
- it reverse the array item take the last and put it first 

# map
- take the array element and put it in another array with your edits on the elements if you like 
```js
let array=[2,13,1];
let newArr= array.map(function(item){
	return item+2;	
})
```

```js 

const newArray = number.map((element) => return element < 2;)
// output [ 0 , 1 ]
```

# split 
- this split strings to array 
```js
let str= " what is the cost of lies "
str.split(" ")// this split by spaces at every space it will split
 
```

# reduce
// Read About It DuDe 
