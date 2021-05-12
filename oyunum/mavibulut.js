var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images

var bulut = new Image();
var gokyuzu = new Image();
var bina = new Image();
var damla = new Image();


bulut.src = "images/bulut.png";
gokyuzu.src = "images/gokyuzu.png";
bina.src = "images/bina.png";
damla.src = "images/damla.png";

var gap=177;
var constant = damla.height + gap;

var bY=10;
var bX=10;

var gravity= 1.5;

var score = 0;

var fly = new Audio();
var scor = new Audio();

fly.src = "sounds/fly.mp3";
scor.src = "sounds/score.mp3";

document.addEventListener("keydown", moveUp);

function moveUp(){
    bY-=20;
    fly.play();
}

var dCor = [];
dCor[0] = {
    x : cvs.width,
    y : 0

}

var binaCor = [];
binaCor[0] = {
    x : cvs.width,
    y : 50
}


function draw(){
    ctx.drawImage(gokyuzu,0,0);

    for(var i=0; i < dCor.length; i++){
        ctx.drawImage(damla,dCor[i].x,dCor[i].y);

        dCor[i].x--;

        if(dCor[i].x==90){
            dCor.push({
                x : cvs.width,
                y : Math.floor(Math.random()*damla.height)-damla.height/8
            })
        }

        if(dCor[i].x == 5){
            score++;
            scor.play();
        }
    }



    for(var j=0; j < binaCor.length; j++){
        ctx.drawImage(bina,binaCor[j].x,binaCor[j].y+constant);

        binaCor[j].x--;

        if(binaCor[j].x==90){
            binaCor.push({
                x : cvs.width,
                y : Math.floor(Math.random()*bina.height)-bina.height
            })
        }

        if( bX + bulut.width >= binaCor[j].x && bX <= binaCor[j].x + bina.width && bY+bulut.height >= binaCor[j].y+constant || bY + bulut.height >=  cvs.height){
            location.reload();
        }
        
    
    }

   

    


    ctx.drawImage(bulut,bX,bY);

    bY+=gravity;

    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,cvs.height-20);

    requestAnimationFrame(draw);
    
}

draw();
























