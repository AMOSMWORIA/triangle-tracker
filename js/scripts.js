function answer () {

var a =parseInt(document.getElementById("A").value);
var b =parseInt(document.getElementById("B").value);
var c =parseInt(document.getElementById("C").value);
var display = document.getElementById("feedback");

console.log(a);
console.log(b);
console.log(c);

if (isNaN(a) || isNaN(b) || isNaN(c)){
    display.innerHTML = "This is an Invalid input";
}

else if( (a+b)<=c||(a+c)<=b||(b+c)<=a ){
    display.innerHTML="This is not a Triangle";
}

else if (a===b && a===c && b===c){
display.innerHTML = "This is an Equilateral Triangle";
}

else if (a===b||a===c||b===c){
    display.innerHTML="This is an Isosceles";
}

else if (a!==b||a!==c&&b!==c){
    display.innerHTML="This is a scalene";
  } 
}
