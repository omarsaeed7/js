# Events 
- Keyboard Events
1- cancellable => which key can i cancel 
  - Not all events is cancellable => check devdocs website
2- can deal with printed and unprinted keys => which keys can be printed and unprinted
  - keydown : can deal with printed and unprinted keys => you can get the keycode of the key 
    - preventable 
  - keyup : can deal with printed and unprinted keys => you can get the keycode of the key 
    - not preventable => you can't prevent the default behavior
  - keypress : can deal with printed keys only it's now deprecated 
  
```html
<!-- Cancel  the default behavior of events in html  -->
<input type="checkbox" onclick="return false;"> 
```

```js

window.addEventListender('load', function(){
  usertxt = document.querySelector("input[type='text']");
  spantag = document.getElementByTagName('span')[0];
  
  usertxt.addEventListender('keyup', function(e){
    console.log(e.keyCode);
  })
})

```

## Handle the events 
```html
<script>
  // revieve the object 
  var x = true;
  function ff(e){
    e.preventDefault(); // stop the default behavior of the element 
  }
</script>
<!-- passing the event object  -->
<a href="www.google.com" onclick="ff(event);"> Google </a>
<!-- or throw the html -->
<a href="www.google.com" onclick="event.preventDefault();"> Google </a>
```

# Regex : Pattern 

```js
var myPattern = new RegExp();
var myPatternLiteral 

/*
  ^ => starts with
  $ => end with 
  /pattern/flags(i:ignore case sensitivity | g:globalmatch | m:multiline)
*/
// string : lenght : 4 letters and all must be small letters 
// regex : /[a-z]/
// this mean the user input have 4 small letters whatever they are at the beginning of in the middle or in the last of the input 
var myPattern = /[a-z]{4}/;

// what if you want to restrict more 
// let's make it start with 4 small letters 
var myPattern = /^[a-z]{4}/

// end with 
var myPattern = /[a-z]{4}$/
```

- Start with and end with 
```bash
> var myPattern = /^[a-z]{4}$/
undefined
> 'Omar'.match(myPattern);
null
> 'Oamar'.match(myPattern);
null
> 'amar'.match(myPattern);
[ 'amar', index: 0, input: 'amar', groups: undefined ]


# lets match this pattern 
# 'abc-12345' contain 3 letters and - and 5 numbers at the end 
> var newPattern = /^[a-m]{3}-\d{5}$/
undefined
> 'abc-1231'.match(newPattern)
null
> 'abc-12345'.match(newPattern)
[ 'abc-12345', index: 0, input: 'abc-12345', groups: undefined ]
> 'abz-12345'.match(newPattern)
null
```

