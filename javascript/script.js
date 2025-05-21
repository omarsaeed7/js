var x = 10;

x.toFixed(2); // "10.00" --> it's string 


var y = new Number(10);
// x == y // true 
var z = new Number(10);

z.valueOf() == y.valueOf(); // true

z = y;

z == y; // true cause now they are have the same state and reference to the same object with the same value