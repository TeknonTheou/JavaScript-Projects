function myDictionary(){//--create Dictionary function
    var Pet = {//--name of dictionary variable
        Species:"Cat",//--Set value of Species variable to Cat
        Color: "Gray",//--Set value of Color variable to Gray
        Breed: "Shorthair",//--Set value of Breed variable to Shorthair
        Age: 16,//--Set value of Age variable to 16
        Sound: "Meow"//--Set value of Sound variable to Meow
    };
    delete Pet.Species; //--delete Species variable
    document.getElementById("Dictionary").innerHTML=Pet.Species; //--Result will display in HTML under id "Dictionary"
}