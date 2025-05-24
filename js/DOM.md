# DOM
<img src="DOM.png" width="500px" style=" display: block;margin:auto">
<br>

- it Used To Make Interact between JS & HTML & CSS
- It's like an Object

```js
// Access
document.querySelector('CSS Selector')
//CSS Selector = ".class" "#id" or the name of the tag like "p" or span or "h1"
// Example
document.querySelector('p') // this select the first 'p' in the html
document.querySelectorAll('p') // this select all the 'p' in the html

// If u wanna acces spacific element
// the document is like an array
// this select the second 'p' element in the html file
document.querySelectorAll('p')[1]

/* Rule */

// Add Selection to A Variable
const c1=document.querySelectorAll('p')
// if u wanna show the value inside the element
const c2=document.querySelector('p').innerHtml 

c2.innerHTML =` What is the cost oflie ${c2}`

// Change Style With DOM
c2.style.color="NewColor"
// Or use getComputedStyle()
const stylee=getComputedStyle(c2)
style.color

// Read Attributes of element
const c4=document.quarySelector('p')
c4.getAttribute("id")
// Change Attribute Value
c4.setAttribure("id","red")
```
---
## Adding Element To Html
```js
let liElement = document.createElement("li")
let textContent = document.createTextNode("Name")
liElement.appendChild(textContent)
document.getElementById("ul").appendChild(liElement)
```
## Remove Element In Html
```js  
document.getElementById("ul").removeChild(ChildeNode)
```
