var mazeData=[
    [0,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,1,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,1,1,0,1],
    [1,0,0,0,1,0,0,0,0,1,0,1],
    [1,1,1,0,0,0,1,1,0,0,0,1],
    [1,0,1,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,1,0,0,0,0,0,1],
    [1,0,1,1,0,1,0,1,1,1,0,1],
    [1,0,1,0,0,1,0,0,0,1,0,1],
    [1,0,1,0,1,1,1,1,0,1,0,1],
    [1,0,1,0,0,0,0,0,0,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1]
];

var gameTime=0, gameTimer, px=0, py=0;//create varaibles to store the score, game time, and coordinates.
onkeydown=handleKeys;//tell the program which fucntion to run when keys are pressed.
onready=drawMaze();//tell program which function to run when page is ready.
onready=startUp();//onready=startUp();
function setLeft(id,x){document.getElementById(id).style.left=x+"px";}//defines function to set x axis coordinates for any element
function setTop(id,y){document.getElementById(id).style.top=y+"px";}//defines function to set y axis coordinates for any element
function drawMaze(){
    for(var y=0;y<12;y++){
        for (var x=0;x<12;x++){
            var newOb=document.createElement('div');
            document.getElementById("mazeHolder").appendChild(newOb);
            var divId=Math.random();
            newOb.setAttribute('id', divId);
            setLeft(divId,50*x);
            setTop(divId,50*y);
            if(mazeData[y][x]==0){
                document.getElementById(divId).style.backgroundColor="white";
            }
        }
    }
}

function startUp(){//Define the function
    gameTimer=window.setInterval(displayTime,1000);//Start the gameTimer. This timer will call the function named diplayTime every second. (1000 milliseconds)
}//End function

function displayTime(){//define function
    gameTime++;//add one to value stored in gameTime variable.
    document.getElementById("timeTB").innerText="Time:"+gameTime;//show time in paragraph called timeTB
}//end function

function handleKeys(e){
    if((e.keyCode==37)&&mazeData[py][px-1]==0){px--;}
    if((e.keyCode==39)&&mazeData[py][px+1]==0){px++;}
    if((e.keyCode==38)&&mazeData[py-1][px]==0){py--;}
    if((e.keyCode==40)&&mazeData[py+1][px]==0){py++;}
    setLeft("player",px*50);
    setTop("player",py*50);
    if(px==11&&py==10){alert("Well done! Your time was:" + gameTime + " seconds.");
    location.reload();}
}