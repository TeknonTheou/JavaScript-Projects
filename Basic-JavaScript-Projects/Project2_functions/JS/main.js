function My_First_Function(){ //This Function changes the text in the button when clicked
    var str ="This is the button text!";//setting text that will appear inside button when it is clicked.
    document.getElementById("Button_Text").innerHTML=str.fontcolor("blue");//setting id which will call this function, and changing font to blue.
}
function myFunction(){ //This function changes the text of the paragraph element under id "Concatentate" when clicked.
    var sentence="I am learning"; //setting initial text
    sentence += " a lot from this book!"; //concatenating text with additional wording
    document.getElementById("Concatenate").innerHTML=sentence; //setting the id which will call this function
}
function whatTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = newTime(m);
    s = newTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    setTimeout(whatTime, 1000);
  }
  
  function newTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }