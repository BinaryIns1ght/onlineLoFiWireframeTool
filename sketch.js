let bgColor, canvasButton, circleX;

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

// class dragging {
//   constructor() {

//   }
// }