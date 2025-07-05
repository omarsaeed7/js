# Explicit Binding For "this"

- call method
  ``` call(this,arguments);```

```js
  var obj1 = {
    ID : 100,
    Name: "Object one",
    Print: function (){
      // this refer to the object that i'm in
      return this.ID + " : " + this.Name;
    }
  };

  var obj2 = {
       ID : 101,
       Name: "Object two",
       Print: function (){
         // this refer to the object that i'm in
         return this.ID + " : " + this.Name;
       }
  };

  // let's remove the redundunce of the function in both object

  var obj3 = {
       ID : 101,
       Name: "Object two",
  };
  
  console.log(obj1.Print());
  console.log(obj2.Print.call(obj3)); //'101 : Object two'
  
```

- apply method
  - same as the call() 
  - differnet in  the second parameter 
  ``` apply(this,array);```
- bind method
  - create a copy of the function 
  
```js

var obj2Print = obj1.Print.bind(obj2);

console.log(obj2Print);
````
