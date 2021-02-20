//Create variables here
var dog,happyDog,database,foodS,foodStock
var dogImg1, dogImg2

function preload()
{
  //load images here
  dogImg1 = loadImage("images/dogImg.png")
  dogImg2 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(250,250,50,80);
  dog.addImage(dogImg1);
  dog.scale = 0.4;

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background("White");
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg2);
  }

  drawSprites();
  //add styles here
  text("Food Remaining = " + foodS,350,50);
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x)
  { if(x<=0){ x=0; }
  else
  { x=x-1; } database.ref('/').update({ food:x }) }

