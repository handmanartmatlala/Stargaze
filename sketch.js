let bg;
let y = 0;

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('night.png.jpg');
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  image(bg,0,0)
  
  

}
