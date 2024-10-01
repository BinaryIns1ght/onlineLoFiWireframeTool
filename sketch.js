/* 

Do note this was stylized on a 2560 x 1600 px, so sorry if elements are disorganized

*/

let bgR, bgG, bgB, bg1, bg2, bg3, bg4;
let circleTt, circleXt, circleYt, circleSt, circleCt, circleBt, circleX, circleY, circleS, circleC, circleB, cX, cY, cS, cC, cB, buttonCircle;

function setup() {
  createCanvas(1500, 900);

  bgR = createSlider(0, 255, 211);
  bgR.position(150, 1470);
  bgG = createSlider(0, 255, 211);
  bgG.position(450, 1470);
  bgB = createSlider(0, 255, 211);
  bgB.position(750, 1470);

  bg1 = createDiv('BG Color RGB Sliders');
  bg1.position(50, 1430);
  bg2 = createDiv('Red: ');
  bg2.position(100, 1470);
  bg3 = createDiv('Green:');
  bg3.position(400, 1470);
  bg4 = createDiv('Blue');
  bg4.position(700, 1470);

  circleX = createInput(' ', 'number');
  circleX.position(175, 1575);
  circleY = createInput(' ', 'number');
  circleY.position(475, 1575);
  circleS = createInput(' ', 'number');
  circleS.position(775, 1575);
  circleC = createColorPicker('white');
  circleC.position(1100, 1575);
  circleB = createColorPicker('black');
  circleB.position(1400, 1575);
  buttonCircle = createButton('Make a circle');
  buttonCircle.position(1500, 1575);
}

function draw() {
  let RGB = color(bgR.value(), bgG.value(), bgB.value());
  background(RGB);
  
  
}

function makeCircle(x, y, size, color, border) {
  fill(color);
  strokeWeight(3);
  stroke(border);
  circle(x,y,size);
}
