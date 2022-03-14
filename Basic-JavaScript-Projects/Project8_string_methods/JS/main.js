function full_Sentence(){//combines parts into a single line using "concat" method, displays in HTML upon button click
    var part_1="I have ";
    var part_2="made this ";
    var part_3="into a complete ";
    var part_4="sentence.";
    var whole_sentence=part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML=whole_sentence;
}

function slice_Method(){//creates a "slice" from variable "sentence" between range of characters specified. Displays in HTML upon button click
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML=Section + "<br>";
}

function upperCase() {//convert string to upper case (all caps).
    let text = document.getElementById("All_Caps").innerHTML;
    document.getElementById("All_Caps").innerHTML = text.toUpperCase() + "<br>";
}

function searchFunction(){//searches a string for a value and returns the position of the first match.
let text1 = "Mr. Blue has a blue house."
let position = text1.search(/blue/i);
document.getElementById("demo").innerHTML = position;
}

function string_Method(){//convert number to string
    var x = 91;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method(){//format number to specified length
    var y = 12345.67890987654321;
    document.getElementById("Precision").innerHTML=y.toPrecision(11);
}

function fixed_Method(){//Converts number to string and rounds the string to a specified number of decimals.
    let num = 5.56789;
let n = num.toFixed(3);

document.getElementById("fixed").innerHTML = n
}

function findValue(){//returns the value of the string
let text2 = new String("Here I am!");
let result = text2.valueOf()
document.getElementById("demo2").innerHTML = result;
}