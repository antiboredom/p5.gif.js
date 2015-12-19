# p5.gif.js

p5.gif.js is a library that let's you play animated gifs in p5.js sketches. You load a gif by calling `loadGif('something.gif')` and then can display it using p5's built in `image()` function. Like this:

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
```gif = loadGif(image)``` loads up a gif and returns a gif object

```gif.play()``` plays the gif

```gif.pause()``` pauses the gif

```gif.playing()``` returns true or false depending on if the gif is currently playing

```gif.loading()``` returns true or false depending on if the gif has loaded

```gif.frames()``` returns the frames as an array of image data

```gif.frame([n])``` with no argument, returns the current frame. With an integer as an argument, skips to that frame.

```totalFrames()``` returns the total number of frames in the gif



