var monkey, monkey_running, backImage, banana, img, obstacles, obstaclesImage, back;
var bananaGroup,StoneGroup;
var score = 0;

function preload(){
  backImage = loadImage("jungle.jpg");
  
  monkey_running = loadAnimation("Monkey1.png", "Monkey2.png", "Monkey3.png", "Monkey4.png", "Monkey5.png", "Monkey6.png", "Monkey7.png", "Monkey8.png", "Monkey9.png", "Monkey10.png");
  
  bananaImg = loadImage("banana.png");
  obstaclesImg = loadImage("stone.png");  
}

function setup() {
  createCanvas(600, 400);
  
  
  
  back = createSprite(300,350);
  back.addImage("backGround", backImage);
  back.x = back.width/2;
  back.velocityX = -4;
  
  player = createSprite(100, 340, 5, 5);
  player.addAnimation("Monkey", monkey_running);
  player.scale = 0.2;
  bananaGroup = new Group();
  StoneGroup = new Group();
}

function draw() {
  background(220);
  Obstacles();
  foods();
  
  stroke("White");
  textSize(20);
  fill("White");  
  text("Score: ", + score, 500, 500);
  
  if(back.x < 0) {
    back.x = back.width/4;
  }
  
  
  
  switch(score){
    case 10: monkey.scale = 0.12;
             break;
    case 20: monkey.scale = 0.14;
             break;
    case 30: mokney.scale = 0.16;
             break;
    case 40: mokney.scale = 0.20;
             break;
    default: break;     
  }
  
  
  drawSprites();
}

function Obstacles(){
  if(frameCount % 300 === 0){
  var rock = createSprite(600, 420, 5, 5);
   rock.scale = 0.2;
   rock.velocityX = -5;
   rock.addImage("stone.png", obstaclesImg);
   rock.lifetime = 140;
   rock.setCollider("circle", 0, 0, 80);                          
   rock.x = random(280,320);
   StoneGroup.add(rock);
 }
}

function foods(){
  if(frameCount % 80 === 0){
    var banana = createSprite(600, 200, 5, 5);
      banana.addImage("banana.png",bananaImg);
      banana.scale = 0.07;
      banana.velocityX= -4;
      banana.lifetime= 160;
      banana.x = random(190, 165);   
      bananaGroup.add(banana);
  }
}