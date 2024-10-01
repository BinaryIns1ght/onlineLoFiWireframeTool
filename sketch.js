let bgColor, canvasButton, circleX, circleY, circleS, circleC, circleB, makingCircles, bgCheck, colorValue;

function setup() {
  createCanvas(1500, 900);

  bgCheck = createCheckbox(' Transparent Background?');
  bgCheck.position(350, 1480)

  colorValue = createCheckbox(' Remove Background Color Text?');
  colorValue.position(700, 1480)
  
  bgColor = createColorPicker('gray');
  bgColor.position(200, 1480);
  bgColor.size(100, 30);
  bgColor.draggable();

  circleX = createInput();
  circleX.position(150, 1560);
  circleX.size(100, 20);
  circleX.draggable();
  let cX = circleX.value();

  circleY = createInput();
  circleY.position(415, 1560);
  circleY.size(100, 20);
  circleY.draggable();
  let cY= circleY.value();

  circleS = createInput();
  circleS.position(648, 1560);
  circleS.size(100, 20);
  circleS.draggable();
  let cS = circleS.value();

  circleC = createColorPicker('white');
  circleC.position(900, 1555);
  circleC.size(100, 30);
  circleC.draggable();
  let cC = circleC.color();

  circleB = createColorPicker('white');
  circleB.position(1200, 1555);
  circleB.size(100, 30);
  let cB = circleB.value();

  makingCircles = createButton('Make Your Circle', 100, 1500);
  makingCircles.mousePressed();
  makingCircles.position(1350, 1560);

  canvasButton = createButton('Save Canvas', 100, 1500);
  canvasButton.mousePressed(canvasSaved);
}

function draw() {
  if (bgCheck.checked()) {
    clear();
  } 
  else {
    background(bgColor.color());
  }
  
  if (colorValue.checked()) {
    text(' ', 0, 0);
  }
  else{
    text('Backgroud color: ' + bgColor.color(), 10, 875);  
  }
}

function canvasSaved() {
  save('mySketch.png');
}

class Circle {
  constructor(cX, cY, cS, cC, cB){
    this.x = cX,
    this.y = cY,
    this.size = cS,
    this.color = cC,
    this.border = cB
  }

  display() {
    
  }
}