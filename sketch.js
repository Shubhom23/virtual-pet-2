var dogI1,dogI2,dog;
var database, foodstock, foodS;
function preload()
{
	dogI1 = loadImage("images/dogImg.png");
  dogI2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(250,250,50,50);
  dog.addImage(dogI1);
  dog.scale=0.1;

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    foodS = foodS -1;
    writeStock(foodS);
    dog.addImage(dogI2);
  }
  textSize(20);
  fill("green");
  stroke("yellow");
  text("Press UP_ARROW key to feed the dog",50,50);
  text("Food remaining:" + foodS ,250,200);
  drawSprites();
}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  database.ref('/').update ( {
    food:x
  })
}



