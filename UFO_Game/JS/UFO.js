var score=0, gameTime=0, gameTimer, ufoX=0, ufoY=0, atomX=0, atomY=0;//create varaibles to store the score, game time, and coordinates.
onkeydown=handleKeys;//tell the program which fucntion to run when keys are pressed.
onready=startUp();//tell program which function to run when page is ready.
function setLeft(id,x){document.getElementById(id).style.left=x+"px";}//defines function to set x axis coordinates for any element
function setTop(id,y){document.getElementById(id).style.top=y+"px";}//defines function to set y axis coordinates for any element
function randomNumber(low,high){return(Math.floor(low+Math.random()*(1+high-low)));}//defines function that returns a random number between two values.

function startUp(){//Define the function
    moveLightning();//Call the moveLightning function
    gameTimer=window.setInterval(displayTime,1000);//Start the gameTimer. This timer will call the function named diplayTime every second. (1000 milliseconds)
}//End function

function displayTime(){//define function
    gameTime++;//add one to value stored in gameTime variable.
    document.getElementById("timeTB").innerText="Time:"+gameTime;//show time in paragraph called timeTB
}//end function

function moveLightning(){//define function
    lightningX=randomNumber(2,16);//set lightning to random x axis coordinates
    lightningY=randomNumber(2,16);//set lightning to random y axis coordinates
    setLeft("lightning", 40*lightningX);//set new position for lightning x axis by multiplying lightningX by 50
    setTop("lightning",40*lightningY)//set new position for lightning y axis by multiplying lightningY by 50
}//end function
function handleKeys(e){
    if(e.keyCode==37){ufoX--;}
    if(e.keyCode==39){ufoX++;}
    if(e.keyCode==38){ufoY--;}
    if(e.keyCode==40){ufoY++;}
    setLeft("ufo",40*ufoX);
    setTop("ufo",40*ufoY);
    checkIfHitLightning();
}
function checkIfHitLightning(){
    if((ufoX==lightningX)&&(ufoY==lightningY)){
        score++;
        document.getElementById("scoreTB").innerText="Score: "+ score;
        moveLightning();
        if(score==10){gameOver();}
    }
}
function gameOver(){
    clearInterval(gameTimer);
    alert("Well done! Your time was:" + gameTime + " seconds.");
    location.reload();
}