let bgR, bgG, bgB, bg1, bg2, bg3, bg4;

function setup() {
  createCanvas(1500, 900);

  bgR = createSlider(0, 255, 255);
  bgR.position(100, 1420);

  bgG = createSlider(0, 255, 255);
  bgG.position(300, 1420);

  bgB = createSlider(0, 255, 255);
  bgB.position(500, 1420);


}

function draw() {
  let RGBA = color(bgR.value(), bgG.value(), bgB.value());
  background(RGBA);
}

