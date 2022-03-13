if (1<2){//Compare left and right numbers, and print if statement is true
    document.write("The left number is smaller than the nubmer on the right."+"<br>");
}

var x=7;//add 20 to X and display result
function Add_numbers_1(){
    document.write(20 + x + "<br>");
}

function Add_numbers_2(){//add 50 to X and display result
    document.write(x + 50);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3(){//add 20 to y and display result in console
    var y=10;
    console.log(20+y);
}
function Add_numbers_4(){//add 100 to y and display in console...this has a deliberate error to display local vs global variables.
    console.log(y+100);
}
Add_numbers_3();
Add_numbers_4();

function get_Date(){//displays "How are you today?" in HTML upon click, if it is before 6pm
    if (new Date().getHours()<18){
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}

function whatAge(){//takes input from HTML and determines if value is 16 or more, prints results accordingly
    Age = document.getElementById("Age").value;
    if (Age>=16){
    Drive="You are old enough to drive!";
    }
    else {
    Drive="You are not old enough to drive!";
    }
    document.getElementById("How_old").innerHTML=Drive;
}
function Time_function(){//takes time from computer, displays results upon click based on time received
    var Time=new Date().getHours();
    var Reply;
    if (Time<12==Time>0){
        Reply="It is morning time!";
    }
    else if (Time>=12==Time<18){
        Reply="It is afternoon.";
    }
    else {
        Reply="It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}