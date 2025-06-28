let colors=['green','blue','black']
colors.pop() // Delete element from the end of the array // return the deleted element
console.log(colors)
colors.push('yellow') // Add element to the end of the array // return the number of the  elements in array

// colors.shift()  // Delete Element from the begining of the array // return the deleted element
// console.log(colors)
// colors.unshift("Red") // Add new element to the begining of the array // return the number of elements in array
// console.log(colors)
colors.some()
var x = 10;

x.toFixed(2); // "10.00" --> it's string 


var y = new Number(10);
// x == y // true 
var z = new Number(10);

z.valueOf() == y.valueOf(); // true

z = y;

z == y; // true cause now they are have the same state and reference to the same object with the same value


// Task 1
/*
var msg = prompt("Enter a Message");
for(var x = 1; x < 6; x++){
 document.writeln('<h'+x+'>' + msg + '</h'+x+'>')
}
*/

// Task 2
/*
var result = 0;
do{
 var num = parseInt(prompt("Enter Number"));
  if(num.constructor.name === 'Number' && num > 0){
   result += Number(num)
  }
}while(result < 100)
document.writeln(result);
*/

// Task 3
/*
var sum = 0;
var multi = 1;
var division = 1;
var arr = [];
var x = 0;
do{
 arr[x] = parseInt(prompt("enter Numbers"));
 // if(arr[x].constructor.name === 'Number' && arr[x] > 0){
   if (x === 0)
    division = arr[x];
   else 
    division /= arr[x];
   sum += arr[x];
   multi *= arr[x];
  // }
 x++;
}while(x <img 3)
 var sumResult = arr.toString().replace(/,/g," + ");
 var multiResult = arr.toString().replace(/,/g," * ");
 var divResult = arr.toString().replace(/,/g," / ");

 document.writeln('<pre>');
 document.writeln('Sum of the 3 values : ' ,sumResult, ' = ' ,sum)
  document.writeln('Multiplication of the 3 values : ' ,multiResult, ' = ' ,multi)
   document.writeln('Division of the 3 values : ' ,divResult, ' = ' ,division)
 document.writeln('</pre>')
*/

// Task 4
/*
var imageName = prompt("Enter Image Name");
var color = prompt("Enter Color Name");

document.writeln('<p style="color:',color,'">',imageName,'</p>');
document.writeln('<img src="../image-1.png" style="border: ',color,' 5px solid"','>')
*/


//Task 5
/*
var number = prompt("Enter Number ");
var iniRadix = prompt("Enter Initial Radix");
var targetRadix = prompt("Enter Target Radix ");

number = parseInt(number,iniRadix);

result =  parseInt(number.toString(targetRadix))
document.writeln('<h1> Your number in radix ', targetRadix,' = ', result, '</h1>')
*/

// Task 6 
/*
var userInput = parseInt(prompt("Enter Number To Convert to your locale"));
var egypt  = userInput.toLocaleString('ar-EG');
var saudiArabia  = userInput.toLocaleString('ar-SA');
var germany  = userInput.toLocaleString('de-DE');
document.writeln('<h1> Egypt : ',egypt ,'</h1>')
document.writeln('<h1> Saudi Arabia : ',saudiArabia ,'</h1>')
document.writeln('<h1> Germany : ',germany ,'</h1>')
*/


// Task 7
/*
var arr = [10.2,20,35,333.12345];
var temp = 0;
for (var x = 0 ; x < arr.length ; x++ ){
 temp = arr[x].toString().length;
 if(temp < arr[x].toString().length){
  temp = arr[x].toString().length;
 }
}
for (var y = 0 ; y < arr.length ; y++){
 console.log(arr[y].toPrecision(temp)); 
}
*/


// Task 8 -> task 6 in slides
function sum(arr){
 var sum = 0;
 for(var x = 0 ; x < arr.length ; x++){
  sum += arr[x];
 }
 return sum;
}
var arr= [1,2,3,4,5,6];
document.writeln('<table style= "width: 100px; text-align: center;>');
document.writeln('<tr><th>Values</th></tr>');

for (var x = 0 ; x < arr.length ; x++ ){
 if(x%2 === 0){
 document.writeln('<tr style="background: red" >','<td>',arr[x],'</td>','</tr>');
 }else {
   document.writeln('<tr style="background: red" >','<td>',arr[x],'</td>','</tr>');
 }
}
 document.writeln('<tr>', '<td>',sum(arr),'</td>' ,'</tr>')

document.writeln('</table>');

