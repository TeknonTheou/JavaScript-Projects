document.write(typeof "Word" + "<br>");//Displays type of data for "Word"
document.write(typeof 5 + "<br>");//Displays type of data for 5
document.write("4"+ 5+ "<br>");//Concatenates string "4" and number 5
document.write(4E309 + "<br>");//attempts to display 4 multiplied by 10 to the 309th power, resulting in "Infinity" (too large)
document.write(-2E310 + "<br>");//attempts to display -2 multiplied by 10 to the 310th power, resulting in "-Infinity" (too many places to the negative)

S=10;//sets S to number value 10
T=10;//sets S to number value 10
document.write(S===T); //determines if data type and value are the same for S and T and displays result
U=9;//Sets U to number value 9
V="Linus"//Sets V to string value "Linus"
document.write(U===V);//determines if data type and value are the same for U and V and displays result
W=10;//Sets W to number value 10
X="10";//Sets X to string value "10"
document.write(W===X);//determines if data type and value are the same for W and X and displays result
Y=10;//Sets Y to number value 10
Z=7;//Sets Z to number value 7
document.write(Y===Z);//determines if data type and value are the same for Y and Z and displays result

document.write(6>2&&11>5);//determines true or false for AND operator comparing two statements, and displays result
document.write(6>11&&11>3);//determines true or false for AND operator comparing two statements, and displays result
document.write(5>10||10>4);//determines true or false for OR operator comparing two statements, and displays result
document.write(5>10||10>20);//determines true or false for OR operator comparing two statements, and displays result

function myFunction(){
    document.getElementById("Test").innerHTML=0/0;//displays result of 0/0, resulting in NaN
}

function myFunction2(){
    document.getElementById("Test2").innerHTML=isNaN('This is not a number');//determines whether it is true or false that data is not a number, then displays result
}

function myFunction3(){
    document.getElementById("Test3").innerHTML=isNaN(43);//determines whether it is true or false that data is not a number, then displays result
}

function myFunction4(){
    document.getElementById("Test4").innerHTML=(10>3);//determines true or false for > operator and displays result
}

function myFunction5(){
    document.getElementById("Test5").innerHTML=(10<=3);//determines true or false for <= operator and displays result
}
function myFunction6(){
    document.getElementById("Test6").innerHTML=(3==3);//determines true or false for == operator and displays result
}
function myFunction7(){
    document.getElementById("Test7").innerHTML=(10==3);//determines true or false for == operator and displays result    
}

function notFunction(){
    document.getElementById("Not").innerHTML=!(6>11);//determines true or false for > operator and displays the OPPOSITE result
}

function notFunction2(){
    document.getElementById("Not2").innerHTML=!(20>11);//determines true or false for > operator and displays the OPPOSITE result
}
console.log (5*2);//displays result of 5*2 in console
console.log(9<=6);//determines true or false for <= operator and displays result

