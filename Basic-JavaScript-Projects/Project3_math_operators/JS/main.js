function addition_Function(){//---adds 3 and 5 and displays result upon clicking on corresponding line in browser
    var addition = 3+5;
    document.getElementById("add").innerHTML="3+5= " + addition;
}

function subtraction_Function(){//---subtracts 7 from 10 and displays result upon clicking on corresponding line in browser
    var subtraction = 10-7;
    document.getElementById("subtract").innerHTML="10-7= " + subtraction;
}

function multiply_Numbers(){//---multiplies 6 by 7 and displays result upon clicking on corresponding line in browser
    var multiplication = 6*7;
    document.getElementById("multiply").innerHTML="6*7= " + multiplication;
}

function divide_Numbers(){//---divides 8 by 4 and displays result upon clicking on corresponding line in browser
    var division = 8/4;
    document.getElementById("divide").innerHTML="8 / 4= " + division;
}

function more_Math(){//---completes multiple math functions and displays result upon clicking on corresponding line in browser
    var simple_Math=(8+3)*42/2 - 5;
    document.getElementById("math").innerHTML="8 plus 3, multiplied by 42, divided in half, and then subtract 5 =" + simple_Math;
}

function Modulus(){//---divides 26 by 7 and displays the remainder upon clicking on corresponding line in browser
    var remainder= 26%7;
    document.getElementById("remaining").innerHTML="When you divide 26 by 7, you have a remainder of: " + remainder;
}   

function negation_Operator(){//---subtracts X, in this case 10 (starting from zero), and displays result upon clicking on corresponding line in browser
    var x = 10;
    document.getElementById("negate").innerHTML= -x;
}

function oneIncrement(){//---Increases y, in this case 6, by one and displays result upon clicking on corresponding line in browser
    var y=6;
    y++;
    document.getElementById("increment").innerHTML=y;
}

function oneDecrement(){//---Decreases z, in this case 7.8, by one and displays result upon clicking on corresponding line in browser
    var z=7.8;
    z--;
    document.getElementById("decrement").innerHTML=z;
}

window.alert("Random number generator: "+ Math.random()*100);//generates random number between 0 and 100 and displays in pop-up window.