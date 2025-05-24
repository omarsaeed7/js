# Classes
- variables here is note declare like c++ 
```js
class className{
    // constructor are called when you make an object
    constructor(){
        console.log("constructor");
    }

}

// Objects from the class
const car1=new className
const car2=new className

/* Methods inside classes */

class className{

    methodName(parameters){
        // code here 
    }

}

/* Static Members */
class className{
    // this is static variable
    static x=0
    // constructor are called when you make an object
    constructor(){
        console.log("constructor");
    }
    // static method
    static methodName(){
    }
}


/* Public & Private */
class className{
    // this is a private variable member 
    #currentSpeed

    methodName(parameters){
        // code here
        return this.#currentSpeed++; 
    }

}


/* Inheritance */
// private member not include in the inheritance 
class classOne {

}
class classTwo extends classOne{

}

/* overriding Method */

class classOne {
    Name(parameters){
        // code here
       console.log("what")
    }

}
class classTwo extends classOne{
     // this function gonna override the super class method 
    Name(parameters){
        console.log("when")
       
    }
}


```