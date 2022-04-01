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
    if(e.keyCode==37){ufoX--;}//moves ufo left by an increment of 1 when left arrow key is hit.
    if(e.keyCode==39){ufoX++;}//moves ufo right by an increment of 1 when right arrow key is hit.
    if(e.keyCode==38){ufoY--;}//moves ufo up by an increment of 1 when up arrow key is hit.
    if(e.keyCode==40){ufoY++;}//moves ufo down by an increment of 1 when down arrow key is hit.
    setLeft("ufo",40*ufoX);//Set new position for UFO by multiplying ufoX by 40
    setTop("ufo",40*ufoY);//Set new position for UFO by multiplying ufoy by 40
    if(ufoX<-100){ufoX=innerWidth;}
    if(ufoX>innerWidth){ufoX=-100;}
    if(ufoY<-100){ufoY=innerHeight;}
    if(ufoY>innerHeight){ufoY=-100;}
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