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

# DOM 
> Select Something To Do Something 
## Getters 
- is to select the element using theses methods
### Get Elements by HTML Selectors
- getElementById
- getElementByTagName
- getElementByClassName
- getElementByName 

### Get Element By CSS
- querySelector('cssSelector') => return one element 
- querySelectorAll('cssSelector') => return array of elements 

## Get Element by Collections 
- is to get the whole elements of the same type 

```js 
document.getElementByTagName('img').length
// or 
// the collection way 
document.images.length
```

-----------------------------
## Manipulate 
1. Edit Content Of Element 
- innerText => just insert string 
  - get string only
- innerHtml => insert string and element and interpreted 
  => get string only
- value => used with inputs Only
-------
Style 
- document.getElementById("id").style.backgroundColor = "#222" 
- document.getElementById("id").style.borerTopLeftRadius = "2px"
- document.getElementById("id").style["backgroundColor"] = "black" // other way

Or 

```html
<style>
// create class for the style 
.styleOne{
    background-color: #ff2;
}
</style>
<script>
var targetElement = document.getElementById("target");
function applyStyleOne(){
  targetElement.classList.add("styleOne"); // this will add styleOne to the <p> 
}
function removeStyleOne(){ 
  targetElement.classList.remove("styleOne"); // thie will remove the class name from the <p>
}
function toggleStyle(){
  targetElement.classList.toggle("styleOne"); // this will add the class name if doesn't exist and remove it if exist
}
</script>
<body>
    <input  type="button" value="Apply Style One" onclick="applyStyleOne();"
    <input  type="button" value="Apply Style One" onclick="removeStyleOne();"
    <input  type="button" value="Apply Style One" onclick="toggleStyle();"
        
        
    <p id="target">Hello Humen</p>
</body>
    
```

2. Create New Children For Element 
## appendChild()
```js 
var targetText = document.quarySelector("input[type='text']");
var targetDiv = document.getElementByTagName('div')[0];
var createdPara = document.createElement('p');
function addNewPara(){
  targetDiv.innerHTML = "<p>" + targetText.value + "</p>"; // add only one item 
  targetDiv.innerHTML += "<p>" + targetText.value + "</p>"; // add multiple Elements
}
function addNewPara(){
  createdPara.innerText = targetText.value;
  targetDiv.appendChild(createdPara);
}
```
```html 
<style>
    div{
        width:500px;
        height: 500px;
        background: #222;
    }
</style>
<body>
    <input type="text" />
    <input type="button" value="add New Item " onclick="addNewPara();"/>
    <div>
        
    </div>
</body>

```

## insertAdjacent()
```js 

// beforeBegin
// 
// afterBegin (inside)
// 
// beforeEnd
// 
// afterEnd (inside)

```
3. Remove Element 

## remove 

```js
document.getElementsByTagName('p')[0].remove();
```
## removeChild

```js
document.body.removeChild(document.getElementsByTagName('p')[0].remove());
```


# Cookies
1. save data permenent for period of time 

| Property | Specefication |
| -------- | ------- |
| Capacity    | 4 kb |
| Browser Support | HTML 4.0 , HTML 5.0 |
| Accessible from | any page inside domain|
| Expires | Manually Set |
| Storage Location | Browser And Server|
| Send With Request | Yes |


```js 

document.cookie="username" // set : session Cookie // username=> key
docuemnt.cookie ="username=omar;expires="+dateobject// omar=>value

// remove cookie 
document.cookie="username=omar;expires="+oldDateObject
```
