# p5.gif.js

Let's you play animated gifs in p5.js sketches. Like this:

```
var gif;

function setup() {
	c = createCanvas(600,600);
  gif = loadGif('mygif.gif');
}

function draw() {
  background(0);
  
  if (gif.loaded()) {
    image(gif, 0, 0);
  }
}
```

## Reference
```loadGif(image)``` loads up a gif and returns a gif object

```play()``` plays the gif

```pause()``` pauses the gif

```playing()``` returns true or false depending on if the gif is currently playing

```loading()``` returns true or false depending on if the gif has loaded

```frames()``` returns the frames as an array of image data

```frame([n])``` with no argument, returns the current frame. With an integer, moves the frame to that number.

```totalFrames()``` returns the total number of frames in the gif



