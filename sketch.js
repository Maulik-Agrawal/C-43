var back_img;
var blueBoxer, redBoxer;
var boxer1, boxer2;
var gameState = 0;
var database;

function preload() {
  //load all the images 
  back_img = loadImage("images/bg.jpg");

  blueBoxer = loadImage("images/boxer_11.png");
  blueBoxer2 = loadImage("images/boxer_22.png");
  blueBoxer3 = loadImage("images/boxer_33.png");

  redBoxer = loadImage("images/boxer_1.png");
  redBoxer2 = loadImage("images/boxer_2.png")
  redBoxer3 = loadImage("images/boxer_3.png");
}

function setup() {
  //the canvas size will be of the size of the screen
  createCanvas(windowWidth,windowHeight);

  database = firebase.database();

  //sprites of the boxers
  boxer1 = createSprite(590,600);
  boxer1.addImage(blueBoxer);
  boxer1.scale = 5.8;

  boxer2 = createSprite(1200,600);
  boxer2.addImage(redBoxer);
  boxer2.scale = 5.8;
}

function draw() {
  //adding our own background
  background(back_img);
  
  if(keyDown === "s")
  {
    boxer1.addImage(blueBoxer2);
  }

  drawSprites();
}