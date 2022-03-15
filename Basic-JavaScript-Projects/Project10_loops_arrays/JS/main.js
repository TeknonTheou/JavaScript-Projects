function Call_Loop(){//loop displays even numbers up to 20.
    var Dig = "";
    var x=2;
    while (x<22){
        Dig += "<br>" + x;
        x+=2;
    }
    document.getElementById("Loop").innerHTML=Dig;
}

//find length of string assigned to "text"
let text = "Find the character length of this sentence.";
let length = text.length;
document.getElementById("characters").innerHTML = length;

//Creates a loop to display all elements listed in var "Instruments"
var Instruments = ["Guitar", "Cello", "Ukulele", "Mandolin", "Flute", "Recorder"];
var Content = "";
var y;
function for_Loop(){
    for (y=0; y<Instruments.length; y++) {
        Content += Instruments[y] + "<br>";
    }
    document.getElementById("InstrumentList").innerHTML = Content;
}

//build and array to display selected element upon clicking button in HTML file
function dog_acts() {
    var Dog_Actions = [];
    Dog_Actions[0] = "sleeping";
    Dog_Actions[1] = "playing";
    Dog_Actions[2] = "eating";
    Dog_Actions[3] = "barking";
    document.getElementById("Dog").innerHTML = "At this moment, the dog is " + Dog_Actions[3] + ".";
}

//create constant object "Vehicle" and then change/add properties outside initial property list.
function constant_function(){
    const Vehicle = {make:"Lamborghini", model: "Aventador", color: "red"};
    Vehicle.color="black";
    Vehicle.price="$574,000";
    Vehicle.owner="Erik";
    document.getElementById("Constant").innerHTML = "The cost of the " + Vehicle.color + " " + Vehicle.model + " owned by " + Vehicle.owner + "  was " + Vehicle.price + ".";    
}


function test_Let(){//demonstrate block scope of "let", allowing temporary change to var z within "{}"".
var z = 82;
document.getElementById("test").innerHTML=z;
{let z=33;
    document.getElementById("test1").innerHTML=z;}
document.getElementById("test2").innerHTML=z;
}

function returnFunction() {//returns the value of pi
    return Math.PI;
  }
  
function printReturn(){//displays the value returned by "returnFunction" above.
  document.getElementById("Return").innerHTML = returnFunction();}
  let car = {
      make: "Saturn ",
      model: "Ion",
      year: "2007 ",
      color: "black ",
      description: function(){
          return "The car is a " + this.year + this.color + this.make + this.model + ".";
      }
  };
  document.getElementById("Car_Object").innerHTML = car.description();

function testBreak(){//displays results of "break" statement in function upon click of button in HTML
  let text2 = "";
    for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text2 += "The number is " + i + "<br>";
}
document.getElementById("breakDemo").innerHTML = text2;
}

function testContinue(){//displays results of "continue" statement in function upon click of button in HTML
let text3 = "";
for (let b = 0; b < 10; b++) {
  if (b === 3) { continue; }
  text3 += "The number is " + b + "<br>";
}
document.getElementById("continueDemo").innerHTML = text3;
}