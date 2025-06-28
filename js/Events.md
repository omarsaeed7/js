# Events 

### Direct Registration 
- Register event with current created elements 
  - event will not fire with future elements 


### Delegation Registration
- Evenet will be Registered with current and future elements 

> What is the difference between **this** and **target** in event handler function
- In cases : **target** is the same **this** 

- **this** with event handler => refers to object which you register event with it 

1. Direct Registration 
```js
var allTd = document.getElementsByTagName('td');

for ( var i = 0 ; i < allTd.length ; i++ ){
  allTd[i].addEvenetListener('click', function (e){
    console.log(this); // **this** referes to the **td** 
    // target => referes to original element 
    // if you register on **tr** **this** referes to the **tr**
    // **target** will refers to **td** cause you click on td that is inside tr 
    e.target.style.backgroundColor = "yellow";
  })
}
```



# Keyboard Events 
> The diffrentiate points 
1. cancellable : means to prevent default behavior of the browser 
2. can deal with printed and unprinted keys : a

>> There is events cancellable and other not "Check devdocs.io"


```html 
<!-- cancell the event within js -->
<script>
  function ff(e){
    console.log("you clicked anchor tag");
    // e is the event object 
    e.preventDefault(); // this going to prevent the default behavior of the anchor tag so it  will not redirect to the href 
  }
</script>
<a href="google.com" onclick="ff(event);">Visit</a>

<!-- 
1. cancel within html 
we prevent the default behavior of the browser when click on the checkbox 
it will not be checked 
-->
<input type="checkbox" onclick="return false;"/>
```
## Keydown
- can deal with printed and unprinted keys 'like shift ctrl alt'
- preventable 
```js
window.addEvenetListener('load', function(){
  userTxt = document.querySelector("input[type='text']");
  spanTag = document.getElementsByTagName('span')[0];
  
  userTxt.addEvenetListener('keydown',function(e){
    console.log(e);
    console.log(e.keyCode); // 48 -> 57 for numbers 
    
    if (!e.keyCode >= 48 && !e.keyCode <= 57){
      e.preventDefault()
    }
  })
})
```
```html
<body>
    
</body>
```

## Keyup
- can deal with printed and unprinted keys 'like shift ctrl alt'
- not preventable


## Keypress  <Depricated>
- can deal only with printed keys only



# Mouse Events 


## mousedown
```js
window.addEvenetListener('load', function(){
  div = document.getElementsByTagName('div')[0];
  div.addEvenetListener('mousedown',function(e){
    console.log(e);
    console.log(e.which); 
   /*
   1 -> left click 
   2 -> scroll 
   3 -> right click
   */ 
  })
})
```
```html
<body>
    <div style="width:20px; height: 20px;"> </div>
</body>
```

