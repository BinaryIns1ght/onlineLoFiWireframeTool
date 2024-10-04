/* 

Do note this was stylized on a 2560 x 1600 px, so sorry if elements are disorganized

*/

// Shape Arrays
let shape = [];

// Circle variables
let circleT1, circleT2, circleT3, circleT4, 
circleX, circleY, circleS, circleC, circleB, circleBW, 
buttonCircle;

// Rectangle/Square variables
let rectT1, rectT2, rectT3, rectT4, 
rectX, rectY, rectL, rectH, rectC, rectB, rectBW, 
buttonRect;

// Triangle variables
let triT1, triT2, triT3, triT4,
triX1, triX2, triX3, triY1, triY2, triY3, triC, triB, triBW,
buttonTri;

// Text Variables
let textT1, textT2, textT3, textT4, textT5, textT6, textT7,
textStr, textX, textY, textMwidth, textMheight, textF, textA, textS, textC, textB, textBW,
buttonText;

// Bell Sound Effect Variable
let ding, oof;

function preload(){
  ding = loadSound('bellDing.mp3');
  oof = loadSound('oofed.mp3');
}

function setup() {
  createCanvas(windowWidth, 900);

  // Labels separating different sections 
  circleT1 = createDiv('Circle Parameters:');
  circleT1.position(length+40, height*1.475);
  rectT1 = createDiv('Rectangle/Square Parameters:');
  rectT1.position(length+40, height*1.575);
  triT1 = createDiv('Triangle Parameters:');
  triT1.position(length+40, height*1.69);
  textT1 = createDiv('Text Parameters:');
  textT1.position(length+40, height*1.81)
  
  // User input for circle x-coordinate
  circleX = createInput('X-Coordinate');
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

  //  User picks a color to fill the circle (Default: white)
  circleT2 = createDiv('Circle Color:');
  circleT2.position(length+550, height*1.52);
  circleC = createColorPicker('white');
  circleC.position(length+635, height*1.52);
  circleC.size(125,20);

  // User picks a color for the circle's border (Default: black)
  circleT3 = createDiv('Circle Border Color:');
  circleT3.position(length+800, height*1.52);
  circleB = createColorPicker('black');
  circleB.position(length+935, height*1.52);
  circleB.size(125,20);
  
  // User chooses from 1-10 on the weight of the border (Default: 3)
  circleT4 = createDiv('Circle Border Weight:');
  circleT4.position(length+1075, height*1.52);
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
  rectX = createInput('X-Coordinate');
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

  // Rectangle Color Input (Default: light gray)
  rectT2 = createDiv('Rectangle Fill Color:');
  rectT2.position(length+700, height*1.61);
  rectC = createColorPicker('lightgray');
  rectC.size(125,20);
  rectC.position(length+850, height*1.61);

  // Rectangle Border Color (Default: black)
  rectT3 = createDiv('Rectangle Border Color:');
  rectT3.position(length+1000, height*1.61);
  rectB = createColorPicker('black');
  rectB.size(125,20);
  rectB.position(length+1160, height*1.61);

  // Rectangle Border Weight (Default:3)
  rectT4 = createDiv('Rectanfle BW:');
  rectT4.position(length+1300,height*1.61);
  rectBW = createSelect();
  rectBW.position(length+1400, height*1.61);;
  rectBW.size(50,20);
  rectBW.option(1);
  rectBW.option(2);
  rectBW.option(3);
  rectBW.option(4);
  rectBW.option(5);
  rectBW.option(6);
  rectBW.option(7);
  rectBW.option(8);
  rectBW.option(9);
  rectBW.option(10);
  rectBW.selected(3);

  // Button, when pressed, sends inputs to the "makeRect" function to process them
  buttonRect = createButton('Make a Rectangle/Square');
  buttonRect.position(length+40, height*1.65);
  buttonRect.mousePressed(makeRect);

  // User input for the first triangle points x-coordinate
  triX1 = createInput('1st Point X-Coordinate');
  triX1.size(160,15);
  triX1.position(length+40, height*1.72);

  // User input for 1st point y-coordinate
  triY1 = createInput('1st Point Y-Coordinate');
  triY1.size(160,15);
  triY1.position(length+220, height*1.72);

  // User input for 2nd point x-coords
  triX2 = createInput('2nd Point X--Coords');
  triX2.size(160, 15);
  triX2.position(length+400, height*1.72);

  // Inputs for 2nd pt y-coorda
  triY2 = createInput('2nd pt Y-Coords');
  triY2.size(160,15);
  triY2.position(length+580, height*1.72);

  // Input for 3rd pt x-coords
  triX3 = createInput('3rd pt x-coord');
  triX3.size(160,15);
  triX3.position(length+760, height*1.72);

  // Input for 3rd pt y-coords
  triY3 = createInput('3rd pt y-coords');
  triY3.size(160, 15);
  triY3.position(length+940, height*1.72);

  // Color picker for triangle color fill (Default: gray)
  triT2 = createDiv('Triangle Fill Color:');
  triT2.position(length+40, height*1.765);
  triC = createColorPicker('gray');
  triC.size(125, 20);
  triC.position(length+170, height*1.765);

  // Color picker for triangle border/stroke color
  triT3 = createDiv('Triangle Border Color:');
  triT3.position(length+320, height*1.765);
  triB = createColorPicker('black');
  triB.size(125, 20);
  triB.position(length+470, height*1.765);

  // Selector for triangle border weight (Default: 3)
  triT4 = createDiv('Triangle Border Weight:');
  triT4.position(length+620, height*1.765);
  triBW = createSelect();
  triBW.size(50,20);
  triBW.position(length+800, height*1.765);
  triBW.option(1);
  triBW.option(2);
  triBW.option(3);
  triBW.option(4);
  triBW.option(5);
  triBW.option(6);
  triBW.option(7);
  triBW.option(8);
  triBW.option(9);
  triBW.option(10);
  triBW.selected(3)

  // Button to send user input data for the program
  buttonTri = createButton('Make a triangle');
  buttonTri.position(length+900, height*1.765);
  buttonTri.mousePressed(makeTri);

  // User input for text 
  textStr = createInput('Insert Text Here');
  textStr.position(length+40, height*1.85);
  textStr.size(1500,30);
  
  // input for text x-coordinate
  textX = createInput('Txt X-Coords');
  textX.position(length+40, height*1.91);
  textX.size(120,20);

  // Input for text y-coordinate
  textY = createInput('Txt Y-Coords');
  textY.position(length+180, height*1.91);
  textY.size(120,20);

  // Input for text's maximum width
  textMwidth = createInput('Txt Max Width');
  textMwidth.position(length+320, height*1.91);
  textMwidth.size(120,20);

  // Input for text's maximum height
  textMheight = createInput('Txt Max Height');
  textMheight.position(length+460, height*1.91);
  textMheight.size(120,20);

  // Selector for text's font
  textT2 = createDiv('Text Font Family');
  textT2.position(length+600, height*1.91);
  textF = createSelect();
  textF.position(length+750, height*1.91);
  
}

function draw() {
  background(245);

  for(let s = 0; s < shape.length; s++) {
    shape[s].show();
  }
}

// Function when user clicks on shape, it deletes it.
function doubleClicked() {
  for(let i=0; i<shape.length; i++){
    let circleHover = dist(mouseX, mouseY, shape[i].x, shape[i].y);
    let radius = shape[i].size/2;
    if(circleHover < radius) {
      oof.play();
      shape.splice(i,1);
    }

    let rectHover = dist(mouseX, mouseY, shape[i].x, shape[i].y);
    if(rectHover < shape[i].length && rectHover < shape[i].height) {
      oof.play();
      shape.splice(i,1);
    }

    let triHover1 = dist(mouseX, mouseY, shape[i].x1,shape[i].y1);
    let triHover2 = dist(mouseX, mouseY, shape[i].x2,shape[i].y2);
    let triHover3 = dist(mouseX, mouseY, shape[i].x3,shape[i].y3);
    let triHover4 = dist(shape[i].x1, shape[i].y1, shape[i].x2, shape[i].y2);
    let triHover5 = dist(shape[i].x2, shape[i].y2, shape[i].x3, shape[i].y3);
    let triHover6 = dist(shape[i].x1, shape[i].y1, shape[i].x3, shape[i].y3);
    if(triHover1 < triHover4 && triHover2 < triHover5 && triHover3 < triHover6) {
      oof.play();
      shape.splice(i,1);
    }
  }
}

// This function is meant to grab some of the user's inputs and make a circle based off of them
function makeCircle() {
  // Prioritize the sound effect
  ding.play();

  // Collect values from user's inputs
  let f1 = circleX.value();
  let f2 = circleY.value();
  let f3 = circleS.value();
  let f4 = circleC.value();
  let f5 = circleB.value();
  let f6 = circleBW.value();

  // Makes a new object using the user's inputs
  let newCircle = new Circle(f1, f2, f3, f4, f5, f6);
  shape.push(newCircle);
  print(shape);
}

// function to use the user's inputs to make a rectangle/square shape
function makeRect() {
  // Prioritize the sound effect
  ding.play();

  // grabs user input value and defines new variables with them
  let r1 = rectX.value();
  let r2 = rectY.value();
  let r3 = rectL.value();
  let r4 = rectH.value();
  let r5 = rectC.value();
  let r6 = rectB.value();
  let r7 = rectBW.value();

  // Makes a new object using the user's inputs
  let newRect = new Rectangle(r1,r2,r3,r4,r5,r6,r7);
  shape.push(newRect);
  print(shape);
}

// Function to make a triangle with user inputs
function makeTri() {
  // Prioritize the sound effect
  ding.play();

  // sets up variables with user input data
  let t1 = triX1.value();
  let t2 = triY1.value();
  let t3 = triX2.value();
  let t4 = triY2.value();
  let t5 = triX3.value();
  let t6 = triY3.value();
  let t7 = triC.value();
  let t8 = triB.value();
  let t9 = triBW.value();

  // Makes new object with user inputs
  let newTri = new Triangle(t1,t2,t3,t4,t5,t6,t7,t8,t9);
  shape.push(newTri);
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

  show(){
    // Displays the circle with the user's inputs
    stroke(this.borderColor);
    strokeWeight(this.borderWeight);
    fill(this.colorFill);
    circle(this.x, this.y, this.size);
  }
}

class Rectangle {
  constructor(b1,b2,b3,b4,b5,b6,b7){
    this.x = b1;
    this.y = b2;
    this.length = b3;
    this.height = b4;
    this.colorFill = b5;
    this.borderColor = b6;
    this.borderWeight = b7;
  }

  show(){
    // Displays the rectangle/square using the user's inputs
    stroke(this.borderColor);
    strokeWeight(this.borderWeight);
    fill(this.colorFill);
    rect(this.x,this.y,this.length,this.height);
  }
}

class Triangle {
  constructor(c1,c2,c3,c4,c5,c6,c7,c8,c9){
    this.x1 = c1;
    this.y1 = c2;
    this.x2 = c3;
    this.y2 = c4;
    this.x3 = c5;
    this.y3 = c6;
    this.colorFill = c7;
    this.borderColor = c8;
    this.borderWeight = c9;
  }

  show(){
    // Use user inputs to make triangle 
    stroke(this.borderColor);
    strokeWeight(this.borderWeight)
    fill(this.colorFill);
    triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
  }
}