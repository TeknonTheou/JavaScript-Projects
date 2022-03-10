document.write(typeof "Word" + "<br>");
document.write(typeof 5 + "<br>");
document.write("4"+ 5+ "<br>");

function myFunction(){
document.getElementById("Test").innerHTML=0/0;
}

function myFunction2(){
document.getElementById("Test2").innerHTML=isNaN('This is not a number');
}

function myFunction3(){
document.getElementById("Test3").innerHTML=isNaN(43);
}

document.write(4E309 + "<br>");
document.write(-2E310);