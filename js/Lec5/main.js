var targetElement = document.getElementById("target");
var targetText = document.querySelector("input[type='text']");
var targetDiv = document.getElementsByTagName('div')[0];
var createdPara = document.createElement('p');
function applyStyleOne(){
  targetElement.classList.add("styleOne"); // this will add styleOne to the <p> 
}
function removeStyleOne(){ 
  targetElement.classList.remove("styleOne"); // thie will remove the class name from the <p>
}
function toggleStyle(){
  targetElement.classList.toggle("styleOne"); // this will add the class name if doesn't exist and remove it if exist
}
function addNewPara(){
  createdPara.innerText = targetText.value;
  targetDiv.appendChild(createdPara);
}