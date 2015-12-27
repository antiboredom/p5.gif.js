var gif;

function setup() {
  createCanvas(700, 300);
  gif = loadGif('sorry.gif');
}

function draw() {
  background(0);
  image(gif, 0, 0);
}

function mouseMoved() {
  if (gif.loaded() && !gif.playing()){
    var totalFrames = gif.totalFrames();
    var frame = int(map(mouseX, 0, width, 0, totalFrames));
    gif.frame(frame);
  }
}

function mousePressed() {
  if (gif.playing()) {
    gif.pause();
  } else {
    gif.play();
  }
}
