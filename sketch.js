/* 

Do note this was stylized on a 2560 x 1600 px, so sorry if elements are disorganized

*/

// Shape Arrays
let shape = [];

// Circle variables
let circleT1, circleX, circleY, circleS, circleC, circleB, buttonCircle, circleT2, circleT3, circleBW, circleT4;

// Rectangle/Square variables
let rectT1, rectT2, rectT3, rectT4, rectX, rectY, rectL, rectH, rectC, rectB, rectBW, buttonRect;

function setup() {
  createCanvas(1600, 900);
  background(245);

  // Creates labels for some elements
  circleT1 = createDiv('Circle Parameters:');
  circleT1.position(length+40, height*1.475);
  circleT2 = createDiv('Circle Color:');
  circleT2.position(length+550, height*1.52);
  circleT3 = createDiv('Circle Border Color:');
  circleT3.position(length+800, height*1.52);
  circleT4 = createDiv('Circle Border Weight:');
  circleT4.position(length+1075, height*1.52);
  rectT1 = createDiv('Rectangle/Square Parameters:');
  rectT1.position(length+40, height*1.575);
  
  // User input for circle x-coordinate
  circleX = createInput('X-Coordinate, up to 1600');
  circleX.position(length+40, height*1.52);
  circleX.size(160,15);

  // User input for y-coordinte
  circleY = createInput('Y-Coordinate, up to 900');
  circleY.position(length+220, height*1.52);
  circleY.size(160,15);

  // User input for the size of the circle
  circleS = createInput('Circle Size');
  circleS.position(length+400, height*1.52);
  circleS.size(130,15);

  //  User picks a color to fill the circle
  circleC = createColorPicker('white');
  circleC.position(length+635, height*1.52);
  circleC.size(125,20);

  // User picks a color for the circle's border
  circleB = createColorPicker('black');
  circleB.position(length+935, height*1.52);
  circleB.size(125,20);
  
  // User chooses from 1-10 on the weight of the border
  circleBW = createSelect();
  circleBW.position(length+1220, height*1.52);
  circleBW.size(50, 20);
  circleBW.option(1);
  circleBW.option(2);
  circleBW.option(3);
  circleBW.option(4);
  circleBW.option(5);
  circleBW.option(6);
  circleBW.option(7);
  circleBW.option(8);
  circleBW.option(9);
  circleBW.option(10);
  circleBW.selected(3);

  // Calls the 'makeCircle' function make a circle
  buttonCircle = createButton('Make a circle');
  buttonCircle.position(length+1290, height*1.52);
  buttonCircle.mousePressed(makeCircle);

  // Input for rectangle/square x-coordinate
  rectX = createInput('X-Coordinate, up to 1600');
  rectX.position(length+40, height*1.61);
  rectX.size(160,15);

  // Input for rectangle/square y-coordinate
  rectY = createInput('Y-Coordinate, up to 900');
  rectY.size(160,15);
  rectY.position(length+220, height*1.61);

  // Input for rectangle/square length/width
  rectL = createInput('Rect Length');
  rectL.size(130,15);
  rectL.position(length+400, height*1.61);

  // Input for rectangle/square height
  rectH = createInput('Rect Height');
  rectH.size(130,15);
  rectH.position(length+550, height*1.61);
}

// Function when user clicks on shape, it deletes it.
function mousePressed() {
  
}

function draw() {}

// This function is meant to grab some of the user's inputs and make a circle based off of them
function makeCircle() {
  // Collect values from user's inputs
  let f1 = circleX.value();
  let f2 = circleY.value();
  let f3 = circleS.value();
  let f4 = circleC.value();
  let f5 = circleB.value();
  let f6 = circleBW.value();

  // Displays the circle with the user's inputs
  strokeWeight(f6);
  stroke(f5);
  fill(f4);
  circle(f1, f2, f3);

  let newCircle = new Circle(f1, f2, f3, f4, f5, f6);
  shape.push(newCircle);
  print(shape);
}

class Circle {
  constructor(a1, a2, a3, a4, a5, a6) {
    this.x = a1;
    this.y = a2;
    this.size = a3;
    this.colorFill = a4;
    this.borderColor = a5; 
    this.borderWeight = a6;
  }
}