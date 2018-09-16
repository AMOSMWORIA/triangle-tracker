var a = document.getElementById('a').value;
var b = document.getElementById('b').value;
var c = document.getElementById('c').value;
var Triangle = document.getElementById('Triangle').value;




var a=parseInt(prompt("input 1"))
var b=parseInt(prompt("input 2"))
var c=parseInt(prompt("input 3"))










var Triangle = true

if ( a+b<=c||a+c<=d||b+c<=a ){
   console.log("notTriangle") 
}
else if (a===b&&a===c&&b===c) {
  console.log("equilateral")
} 
else if (a===b||a===c||b===c &&a!==b||b!==c||c!==a){
   console.log("Isosceles") 
}
else if (a!==b||a!==c&&b!==c){
   console.log("scalene") 
}