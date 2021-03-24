var ball;
var database;
var pos;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database()
    database.ref("ball/position").on("value",read)
}

function draw(){
    background("cyan");
    if(keyDown(LEFT_ARROW)){
        changePosition(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(3,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-3);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+3);
    }
    drawSprites();
}

function changePosition(x,y){
   database.ref("ball/position").update({x:pos.x + x,y:pos.y + y})
   
   
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
}

function read(data){
  pos = data.val()
  ball.x = pos.x
  ball.y = pos.y
}
