let bgColor, canvasButton, circleX, circleY, circleS;

function setup() {
  createCanvas(1500, 900);
  
  bgColor = createColorPicker('gray');
  bgColor.position(200, 1480);
  bgColor.size(100, 30);
  bgColor.draggable();

  circleX = createInput();
  circleX.position(150, 1585);
  circleX.size(100, 20);
  circleX.draggable();
  let cX = circleX.value();

  circleY = createInput();
  circleY.position(415, 1585);
  circleY.size(100, 20);
  circleY.draggable();
  let cY= circleY.value();

  circleS = createInput();
  circleS.position(648, 1585);
  circleS.size(100, 20);
  circleS.draggable();
  let cS = circleS.value();

  canvasButton = createButton('Save Canvas', 100, 1500);
  canvasButton.mousePressed(canvasSaved);
}

function draw() {
  background(bgColor.color());
  text('Backgroud color: ' + bgColor.value(), 10, 875);  
}

function canvasSaved() {
  save();
}

function makeCircle() {

}

// class dragging {
//   constructor() {

//   }
// }