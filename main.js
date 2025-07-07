function fun(x, y){
  console.log(x, y);
}
fun( y = 18, x = 20);// 18 20 expected 20 18 

function fun2 ( obj ){
  let { x , y } = obj;
  console.log(x ,y)
}
fun2( {
  y : 30,
  x : 50
}); // 50 30 as expected 