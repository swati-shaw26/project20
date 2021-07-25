var bgImg;
var cat;
var mouse;
var canvas;

function preload(){
    //loading the images 
    bgImg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catimg4 = loadAnimation("images/cat4.png");
    mouseimg4 = loadAnimation("images/mouse4.png");
}

function setup(){
   createCanvas(1000,800); 
   //creating cat sprite
   cat = createSprite(870,600);
   cat.addAnimation("catSleeping",catimg1);
   cat.scale = 0.2;

   //creating mouse sprite
   mouse = createSprite(200,600);
   mouse.addAnimation("mouseStanding",mouseimg1);
   mouse.scale = 0.13;

}
function draw(){
    background (bgImg);
    //writting condition to evaluate if cat and mouse collide
    if(cat.x - mouse.x < (cat.width-mouse.width)/2){
        mouse.velocityX = 0;
        //write code to change animation
        cat.addAnimation("catlastImage",catimg4);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("catlastImage");
        mouse.addAnimation("mouselastImage",mouseimg4);
        mouse.scale = 0.15;
        mouse.changeAnimation("mouselastImage");

    }

    drawSprites();
}

function keyPressed(){
    //code for moving and changing animation
    if(keyCode===LEFT_ARROW){
        cat.velocityX = -3;
        cat.addAnimation("catRunning",catimg2);
        cat.changeAnimation("catRunning");
        mouse.addAnimation("mouseTeasing",mouseimg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");    
    } 

}