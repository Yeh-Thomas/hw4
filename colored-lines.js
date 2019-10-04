function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(255);
  
  strokeWeight(5);
  
  for (var x = 50; x <= width - 50; x = x + 50) {
    line(x, height / 2, mouseX, mouseY);
    
    stroke(x, 100, 100);
  }

}
