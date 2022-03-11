function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;//takes input from browser to set "Height" value
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";//determines if value in "Height" is less than 52, and returns result based on true/false
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";//displays results returned by line above, concatenated with "to ride"
}

function Vote_Function() {
    var Height, Can_vote;
    Age = document.getElementById("Age").value;//takes input from browser to set "Age" value
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";//determines if value in "Age" is less than 18, and returns result based on true/false
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";//displays results returned by line above, concatenated with "to vote"
}

// Constructor function for Vehicle objects
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

//Create instances of Vehicle objects
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML="Erik drives a "+Erik.Vehicle_Color + "-colored "+Erik.Vehicle_Model+" manufactured in "+Erik.Vehicle_Year+". He is an "+ Erik.nationality + " citizen.";//display "Erik" vehicle object on click
    }
const John = new Vehicle ("Kia", "Rondo", 2007, "Gold");//Create new Vehicle object

function myFunction2(){document.getElementById("New_and_This").innerHTML="John drives a "+John.Vehicle_Color + "-colored "+John.Vehicle_Model+" manufactured in "+ John.Vehicle_Year;}//display "John" instance of vehicle object on click

Erik.nationality="American";//add new property to "Erik" vehicle object

//nested function to add one to "Starting_point", displays result on click
function count_Function(){
    document.getElementById("Counting").innerHTML=Count();
    function Count(){
        var Starting_point =9;
        function Plus_one() {Starting_point +=1;}
        Plus_one();
        return Starting_point;
    }
}