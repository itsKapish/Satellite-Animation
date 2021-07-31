var satellite, satelliteImg;
var earth, earthImg;
var groundStationLeft, groundStationRight;
var groundStationLeftImg, groundStationRightImg;
var upLinkLeft, upLinkLeftImg;
var upLinkRight, upLinkRightImg;
var downLinkLeft, downLinkLeftImg;
var downLinkRight, downLinkRightImg;

function preload(){
  
  
   earthImg = loadAnimation("other/earth1.png", "other/earth2.png", "other/earth3.png", "other/earth4.png", "other/earth5.png");
  
   satelliteImg = loadImage("other/satellite.png");
  
   groundStationLeftImg = loadImage("other/gstation1.png");
  
   groundStationRightImg = loadImage("other/gstation2.png");
  
  
  upLinkLeftImg = loadAnimation("leftu/upleft1.png", "leftu/upleft2.png", "leftu/upleft3.png", "leftu/upleft4.png", "leftu/upleft5.png", "leftu/upleft6.png", "leftu/upleft7.png", "leftu/upleft8.png");
  
  upLinkRightImg = loadAnimation("rightu/upright1.png", "rightu/upright2.png", "rightu/upright3.png", "rightu/upright4.png", "rightu/upright5.png", "rightu/upright6.png", "rightu/upright7.png", "rightu/upright8.png");
  
  downLinkLeftImg = loadAnimation("leftd/dleft1.png", "leftd/dleft2.png", "leftd/dleft3.png", "leftd/dleft4.png", "leftd/dleft5.png", "leftd/dleft6.png", "leftd/dleft7.png", "leftd/dleft8.png", "leftd/dleft9.png");
  
  downLinkRightImg = loadAnimation("rightd/dright1.png", "rightd/dright2.png", "rightd/dright3.png", "rightd/dright4.png", "rightd/dright5.png", "rightd/dright6.png", "rightd/dright7.png", "rightd/dright8.png");
   
}

function setup(){
  createCanvas(700,500);
  
  earth = createSprite(325,820,50,50);  
  earth.addAnimation("earth", earthImg);
  earth.scale = 0.6;
  
  satellite = createSprite(325,70,50,50);  
  satellite.addImage(satelliteImg);
  satellite.scale = 0.09;
  
  groundStationLeft = createSprite(125,350,50,50);
  groundStationLeft.addImage(groundStationLeftImg);
  groundStationLeft.scale = 0.07;  
  
  groundStationRight = createSprite(525,350,50,50);
  groundStationRight.addImage(groundStationRightImg);
  groundStationRight.scale = 0.07;
  
  upLinkLeft = createSprite(225,225,90,10);
  upLinkLeft.addAnimation("uplinkingLeft", upLinkLeftImg );
  upLinkLeft.scale = 0.05;
  upLinkLeft.visible = false;
  
  upLinkRight = createSprite(425,225,90,10);
  upLinkRight.addAnimation("uplinkingRight", upLinkRightImg );
  upLinkRight.scale = 0.05;
  upLinkRight.visible = false;
  
  downLinkLeft = createSprite(225,225,90,10)
  downLinkLeft.addAnimation("downlinkingLeft", downLinkLeftImg )
  downLinkLeft.scale = 0.05
  downLinkLeft.visible = false
  
  downLinkRight = createSprite(425,225,90,10);
  downLinkRight.addAnimation("downlinkingRight", downLinkRightImg );
  downLinkRight.scale = 0.05;
  downLinkRight.visible = false; 
  
}

function draw(){
  background("black");
  fill("white");
  
  text("Press and hold L&R keys -to Request data from Satellite",1,25);  
  text("Press and hold Left & Right arrow keys",1,50); 
  text("to Recieve data from Satellite",1,60);
  
  text("Press Space to reset data after", 500, 25);
  text("being transmitted or recieved", 500, 35);
  
  if(keyDown("l")){
    upLinkLeft.visible = true
    text("Requesting data from Satellite", 10, 250)
  }
  
  if(keyDown("r")){
    upLinkRight.visible = true
    text("Requesting data from Satellite", 300, 250)     
  }
  
  if(keyDown("LEFT_ARROW")){
    downLinkLeft.visible = true
    text("Transferring data to Left Base Station", 10, 300)
  }
  
  if(keyDown("RIGHT_ARROW")){
    downLinkRight.visible = true
    text("Transferring data to Right Base Station", 490, 300)    
  }
  
  if(keyDown("space")){
    upLinkLeft.visible = false;  
    upLinkRight.visible = false; 
    downLinkLeft.visible = false;  
    downLinkRight.visible = false;  
  }
   
  
  drawSprites();
}



