# Call Function
```js
let obj1 = {
   name: "omar",
   age: "23",
 
}
  function getAge(){
      return this.age
   }
                // function name then call the object inside call function 
   console.log(getAge.call(obj1))
```
```js
const person = {
  fullName: function(city, country) { // this add new item to the object and print it
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway"); 
```

# Apply Function
- The call() method takes arguments separately.
- The apply() method takes arguments as an array.

```js
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);
```
