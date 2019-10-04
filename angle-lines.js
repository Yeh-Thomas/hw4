function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(255);

  for (var x = 80; x < width-10 ; x = x + 10) {
    line(x, height/2, x+80, height/2-75);
  }
}
