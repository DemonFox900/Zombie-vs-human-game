
var gameState="serve"
var soldier
var background
var invisibleBarrierUp
var invisibleBarrierDown
var Score=0
function preload(){
backgroundImage=loadImage("Capture 2.JPG")
bulletImage=loadImage("Bullet-removebg-preview.png")
soldierImage=loadImage("clipart2214.png")
zombieImage=loadImage("Capture-removebg-preview.png")
gameOverImage=loadImage("Game Over Icon.png")
}

function setup() {
 createCanvas(1200,500)
background=createSprite(600,250)
background.addImage("ABC",backgroundImage)
background.scale=2

bullet=createSprite(100,350)
bullet.addImage("BABA",bulletImage)
bullet.scale=0.1
soldier=createSprite(50,390)
soldier.addImage("Guru",soldierImage)
soldier.scale=0.3


invisibleBarrierUp=createSprite(600,0,1200,20)
invisibleBarrierUp.visible=false
invisibleBarrierDown=createSprite(600,500,1200,20)
invisibleBarrierDown.visible=false

}

function draw(){
if(gameState==="serve"){
if(keyDown("Enter")){
    gameState="play"
}
}
    if(gameState==="play"){
    if(World.frameCount % 100==0 ){
        var zombie=createSprite(1070,Math.round(random(0,390)))
        zombie.addImage("XYZ",zombieImage)
        zombie.scale=0.5
        zombie.velocityX=-3
        zombie.lifetime=300
     
    }
    if(keyDown("Space")){
bullet=createSprite(soldier.x,soldier.y)
bullet.velocityX=15
bullet.addImage("BABA",bulletImage)
bullet.scale=0.1      
if(bullet.isTouching(zombie)){
    score=score+1
    zombie.destroy

}
}
if(zombie.isTouching(soldier)){
gameState="end"
}
}
if(gameState==="end"){
    soldier.visible=false
    zombie.visible=false
    bullet.visible=false
    var gameOver=createSprite(600,300)
    gameOver.addImage("ABCDE",gameOverImage)
if(keyDown("enter")){
    gameState=SERVE
}
}


 soldier.y=World.mouseY

 soldier.collide(invisibleBarrierDown)
soldier.collide(invisibleBarrierUp)

    drawSprites();
textSize(15)
text("Score:" +Score,1000,40)
if(gameState==="serve"){
    textSize(25)
    text("The Zombies Have taken Over The City!Kill Them To Save The Day!Press Enter To Start",10,250)
}
if(gameState==="end"){
    textSize(25)
    text("OH NO!DONT GIVE UP!TRY AGAIN BY PRESSING THE ENTER BUTTON!",600,850)
}

}

