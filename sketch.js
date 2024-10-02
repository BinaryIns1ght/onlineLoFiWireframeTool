/* 

Do note this was stylized on a 2560 x 1600 px, so sorry if elements are disorganized

*/

// Circle variables
let circleT1, circleX, circleY, circleS, circleC, circleB, buttonCircle, circleT2, circleT3, circleBW, circleT4;

// Rectangle/Square variables
let rectT1, rectT2, rectT3, rectT4, rectX, rectY, rectL, rectW, rectC, rectB, rectBW;

function setup() {
  createCanvas(1600, 900);
  background(245);

  // Creates labels
  circleT1 = createDiv('Circle Parameters:');
  circleT1.position(length+40, height*1.475);
  circleT2 = createDiv('Circle Color:');
  circleT2.position(length+550, height*1.52);
  circleT3 = createDiv('Circle Border Color:');
  circleT3.position(length+800, height*1.52);
  circleT4 = createDiv('Circle Border Weight:');
  circleT4.position(length+1075, height*1.52);
  
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
}

function mousePressed() {
  let hoverShape = false;

  for(let h =  shape.length - 1; h >=0; h--) {
    if(shape[h].hovering(mouseX, mouseY)) {
      shape.splice(h,1);
      hoverShape = true;
    }
  }
}

function draw() {}

// This function is meant to grab some of the user's inputs and make a circle based off of them
function makeCircle() {
  // Readying the variables
  let f1, f2, f3, f4, f5, f6;

  // Collect values from user's inputs
  f1 = circleX.value();
  f2 = circleY.value();
  f3 = circleS.value();
  f4 = circleC.value();
  f5 = circleB.value();
  f6 = circleBW.value();

  // Displays the circle with the user's inputs
  strokeWeight(f6);
  stroke(f5);
  fill(f4);
  circle(f1, f2, f3);
}