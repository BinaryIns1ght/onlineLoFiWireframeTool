let bgR, bgG, bgB, bg1, bg2, bg3, bg4;

function setup() {
  createCanvas(1500, 900);

  bgR = createSlider(0, 255, 211);
  bgR.position(100, 1475);

  bgG = createSlider(0, 255, 211);
  bgG.position(400, 1475);

  bgB = createSlider(0, 255, 211);
  bgB.position(700, 1475);


}

function draw() {
  let RGB = color(bgR.value(), bgG.value(), bgB.value());
  background(RGB);
}

