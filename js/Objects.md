# Objects

```js
let person = {
  // Like in C++ Classes  , here we seperate between variables or key by comma . and function to
  fName: "omar", // This Called Key "Fname" , Key Value "Omar"
  lName: "Saeed",
  age: 23,
  favFood: "No Suger",
  title: null,
};
console.log(person["fName"]); // print the value of the key
console.log(person["lName"]);
// Or
// this way is used mostly with functions inside the object
person.age; // print the value of the key
person.fName;
```

## Object & Functions

```js
let obj={
    name:'omar',
    age:23,
    changeAge:function(num) // this the function inside an object we use the name thin : and put the function keyword
    {
        this.age=num // we use "this" to reference the value inside the object
        return this.age
    }
}


/* ------------------------------------------- */

let obj1={
    fName:"Name",
    lName:"name",
    age:22,
    salary:400,
    changeSalary:function(){ // this function change the value of the salary key.
        this.salary=this.salary*10
        return this.salary
    },
    changeName:function(str) // this function change the value inside the fName Key
    {
        this.fName=str
        return this.fName
    }
}
console.log(obj1.changeSalary())
obj1.changeSalary();
obj1.changeSalary();

obj1.changeName("Omar");
obj1.changeName("What iS the cost of lies ");

/* Use "for in" to print value and keyname of any object */
let object={
    fname:'omar', age= 22
}
/*------KeyName In-- The targe object */
for ( let keyname in obj1){ // this is a a special For Loop used in objects to print the keyname and the key value
    console.log(keyname, ":",obj1[keyname])// this print the keyname name and the value inside it
}

console.clear() // Clear the console
/* --------------------------------------------------------*/
let obj2={
    name:"what is the cost of lies ",
    age : 23
}
function takeObj(obj,key) // return the key value
{
    return obj[key]
}

function addObj(obj,key,newitem){ // this function change the value of the key within the given key and new key value
    obj[key]=newitem
    return obj
}
addObje(objectname,"keyname","the new Value") // the keyname should be in double quotation
```

# Object And Factor Function

```js
// you can remove the object value if it object got the same name like the funcion parameters .
function genBook(name, author) {
  let book = {
    name,
    author,
  };
  return book;
  // or
  return { name: name, author: author };
}
```

# Nested Objects

```js
let student = [
  {
    name: {
      firstname: "",
      lastname: "",
    },
    age: 22,
  },
];
```

# Destructuring Assignment

```js
// let name =student.name
// let age = student.age
// this gonna take the name and the age from object if they are the same names
let { name, age } = student;
console.log(name, age);
```

# Delete Property In Object

```js
let obj1 = {
  name: "omar",
  age: "23",
};
delete obj1.name;
console.log(obj1);
```

# Check object existance
```js
let obj1 = {
  name : "what"
}
console.log("name" in obj1); // true 
console.log("age" in obj1); // false
```

# Comparing Objects 

> in objects the comparing the address not the value
```js
let obj1 = {  
  name : 'omar',
  age : 26
}
let obj2 = {  
  name : 'omar',
  age : 26
}
// Pass By reference
let obj3 = obj2;

console.log(obj1 == obj2); // false
console.log(obj3 == obj2) // true

```

# Create Constructor

```js

function Person (name, age) {
  this.name = name;
  this.age = age;
}
let obj1 = new Person("omar", 26);
let obj2 = new Person("what", 23);
console.log(obj1,obj2);
```