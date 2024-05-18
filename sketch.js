let pawn;
let pawns = [];
let vel;

function mouseClicked(){
  
}

function Pawn (x, y, r){

  this.pos = createVector(x, y);
  this.r = 20;

  this.update = function(){
    let posx;
    let posy;
    let vel = createVector(mouseX, mouseY);
    vel.sub(this.pos);
    vel.setMag(3);
    this.pos.add(vel);
  }

  this.show = function(){
    fill(255);
    circle(this.pos.x, this.pos.y, this.r*2);
  }

}

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent('sketch-holder');
    //background(255, 0, 200);
    pawn = new Pawn(20, 20, 50);

  }

  function draw(){
    background(0);
    pawn.show();
    pawn.update();
  }
