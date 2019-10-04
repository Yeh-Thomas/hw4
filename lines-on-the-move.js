
// reference from class practice

var lineX = [];
var lineSp = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);


  //space out lines randomly
  for (var i = 0; i < width; i += 5) {
    lineX.push(random(width));
    lineSp.push(random(-10, 10));
  }

}

function draw() {
  background(255);

  stroke(0);

  // set up lines 
  for (var i = 0; i < lineX.length; i += 5) {
    line(lineX[i], height / 2, lineX[i] + 80, height / 2 - 75);


    //move the lines      
    lineX[i] = lineX[i] + lineSp[i];


    if (lineX[i] >= width) {
      lineSp[i] *= -1;
      lineX[i] = width;
    }

    if (lineX[i] <= 0) {
      lineSp[i] *= -1;
      lineX[i] = 0;
    }

  }
}
