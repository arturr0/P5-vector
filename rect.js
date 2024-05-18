let Board = [];
function Area(rectCenter) {
  this.rectCenter = rectCenter;
}

let areaCenter = 40;
function setup() {
  createCanvas(500, 500);
  rectMode(CENTER); // Set rectangle mode to CENTER
  background(220); // Initial background
  for (let i = 0; i < 3; i++) {
    areaCenter += 40;
    let area = new Area(areaCenter);
    Board.push(area);
    
  }
}

function draw() {
  fill(100);
  for (let i = 0; i < Board.length; i++) {
    rect(Board[i].rectCenter, 400, 40, 40);
  }
}


