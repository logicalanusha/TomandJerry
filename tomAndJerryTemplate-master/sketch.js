var bgImg;
var cat, mouse;
function preload() {
    bgImg = loadImage("images/garden.png");
    cat1Img  = loadImage("images/cat1.png");
    mouseImg1 = loadImage("images/mouse1.png");
    cat2Img = loadImage("images/cat2.png");
    mouseImg2 = loadImage("images/mouse2.png");
    cat3Img = loadImage("images/cat3.png");
    mouseImg3 = loadImage("images/mouse3.png");
    cat4Img = loadImage("images/cat4.png");
    mouseImg4 = loadImage("images/mouse4.png");
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,);
    garden.scale = 1;
    garden.addImage(bgImg);

    mouse = createSprite(200,650);
    mouse.scale = 0.1;
    mouse.addImage(mouseImg2);

    cat = createSprite(600,650);
    cat.scale = 0.1;
    cat.addImage(cat1Img);
}

function draw() {
    //Write condition here to evalute if tom and jerry collide

    if (cat.isTouching(mouse)) {
        mouse.addImage(mouseImg1);
        cat.addImage(cat4Img);
        cat.velocityX = 0;
    }

 

    if (keyDown("left")){
        cat.velocityX = -1;
        cat.addImage(cat2Img);
        cat.addImage(cat3Img);
        mouse.addImage(mouseImg3);
              
    }

    cat.setCollider("rectangle", 0,0,cat.width, cat.height);
    //cat.debug = true;

    drawSprites();
}




