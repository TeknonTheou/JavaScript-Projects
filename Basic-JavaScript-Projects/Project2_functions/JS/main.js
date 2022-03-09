function My_First_Function(){ //This Function changes the text in the button when clicked
    var str ="This is the button text!";//setting text that will appear inside button when it is clicked.
    document.getElementById("Button_Text").innerHTML=str.fontcolor("blue");//setting id which will call this function, and changing font to blue.
}
function myFunction(){ //This function changes the text of the paragraph element under id "Concatentate" when clicked.
    var sentence="I am learning"; //setting initial text
    sentence += " a lot from this book!"; //concatenating text with additional wording
    document.getElementById("Concatenate").innerHTML=sentence; //setting the id which will call this function
}