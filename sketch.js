function Node(startLoc, endLoc) {
  this.startLoc = startLoc;
  this.currentLoc = startLoc;
  this.endLoc = endLoc;
}

var startLocs = [];
var endLocs = [];

var nodes = [];
var edges = [];

var forceFactorCounter = Math.random()*10000;
var currentForceFactor;

function setup() {
  createCanvas(windowWidth-10,windowHeight-10);
  // initializeAmpNodes();
  // initializeRectangleNodes();
  // initializeRandomNodes();
  initializeHelloWorld();
}

function draw() {
  drawMouseInteraction();
  // drawNoise();
}

function drawMouseInteraction() {
  background(0);
  
  currentForceFactor = Math.sin(map(mouseX,0,(width/2),0,Math.PI));
  
  for(var i=0; i<nodes.length; i++) {
    drawEdges(i);
  }
  for(var j = 0; j<nodes.length; j++) {
    nodes[j].currentLoc = getCurrentNodeLocNoise(j);
  }
}

function drawNoise() {
  background(0);
  currentForceFactor = Math.sin(map(noise(forceFactorCounter),0,1,0,Math.PI));
  forceFactorCounter += 0.05;
  for(var i=0; i<nodes.length; i++) {
    drawEdges(i);
  }
  for(var j = 0; j<nodes.length; j++) {
    nodes[j].currentLoc = getCurrentNodeLocNoise(j);
  }
}

function drawNode(nodeIndex) {
  var n = nodes[nodeIndex];
  push();
  fill(color(255));
  ellipse(n.getCurrentLoc().x,n.getCurrentLoc().y,4,4);
  pop();
}

function drawEdges(nodeIndex) {
  var n = nodes[nodeIndex];
  var e = edges[nodeIndex];
  for(var i=0; i<e.length; i++) {
    push();
    stroke(color(255));
    strokeWeight(1);
    line(n.currentLoc.x,n.currentLoc.y,nodes[e[i]].currentLoc.x,nodes[e[i]].currentLoc.y);
    pop();
  }
}

function getCurrentNodeLocNoise(nodeIndex) {
  var retLoc = new p5.Vector();
  
  var n = nodes[nodeIndex];
  //Find point on line currentForceFactor between node's start and end locs
  var yDiff = n.endLoc.y - n.startLoc.y;
  var xDiff = n.endLoc.x - n.startLoc.x;
  xDiff *= currentForceFactor;
  yDiff *= currentForceFactor;
  
  retLoc.x = n.startLoc.x + xDiff;
  retLoc.y = n.startLoc.y + yDiff;
  
  return retLoc;
}

function initializeAmpNodes() {
  startLocs = [];
  endLocs = [];
  startLocs[0] = new p5.Vector((width/2)*0.1,(height/2)*0.9);
  startLocs[1] = new p5.Vector((width/2)*0.1,(height/2)*0.9);
  startLocs[2] = new p5.Vector((width/2)*0.1,(height/2)*0.5);
  startLocs[3] = new p5.Vector((width/2)*0.3,(height/2)*0.5);
  startLocs[4] = new p5.Vector((width/2)*0.3,(height/2)*0.9);
  startLocs[5] = new p5.Vector((width/2)*0.3,(height/2)*0.95);
  
  endLocs[0] = new p5.Vector((width/2)*0.1,(height/2)*0.9);
  endLocs[1] = new p5.Vector((width/2)*0.15,(height/2)*0.6);
  endLocs[2] = new p5.Vector((width/2)*0.15,(height/2)*0.6);
  endLocs[3] = new p5.Vector((width/2)*0.2,(height/2)*0.3);
  endLocs[4] = new p5.Vector((width/2)*0.25,(height/2)*0.6);
  endLocs[5] = new p5.Vector((width/2)*0.3,(height/2)*0.9);
  
  startLocs[6] = new p5.Vector((width/2)*0.35,(height/2)*0.9);
  startLocs[7] = new p5.Vector((width/2)*0.35,(height/2)*0.5);
  startLocs[8] = new p5.Vector((width/2)*0.5,(height/2)*0.5);
  startLocs[9] = new p5.Vector((width/2)*0.5,(height/2)*0.9);
  startLocs[10] = new p5.Vector((width/2)*0.65,(height/2)*0.5);
  startLocs[11] = new p5.Vector((width/2)*0.65,(height/2)*0.9);
  
  endLocs[6] = new p5.Vector((width/2)*0.35,(height/2)*0.9);
  endLocs[7] = new p5.Vector((width/2)*0.425,(height/2)*0.3);
  endLocs[8] = new p5.Vector((width/2)*0.5,(height/2)*0.6);
  endLocs[9] = new p5.Vector((width/2)*0.5,(height/2)*0.6);
  endLocs[10] = new p5.Vector((width/2)*0.575,(height/2)*0.3);
  endLocs[11] = new p5.Vector((width/2)*0.65,(height/2)*0.9);
  
  startLocs[12] = new p5.Vector((width/2)*0.7,(height/2)*0.95);
  startLocs[13] = new p5.Vector((width/2)*0.7,(height/2)*0.9);
  startLocs[14] = new p5.Vector((width/2)*0.7,(height/2)*0.5);
  startLocs[15] = new p5.Vector((width/2)*0.9,(height/2)*0.5);
  startLocs[16] = new p5.Vector((width/2)*0.9,(height/2)*0.9);
  
  endLocs[12] = new p5.Vector((width/2)*0.7,(height/2)*0.9);
  endLocs[13] = new p5.Vector((width/2)*0.7,(height/2)*0.65);
  endLocs[14] = new p5.Vector((width/2)*0.7,(height/2)*0.3);
  endLocs[15] = new p5.Vector((width/2)*0.9,(height/2)*0.3);
  endLocs[16] = new p5.Vector((width/2)*0.9,(height/2)*0.65);
  
  for(var i=0; i<17; i++) {
    nodes[i] = new Node(startLocs[i],endLocs[i]);
  }
  
  edges[0] = [1];
  edges[1] = [0,2,4];
  edges[2] = [1,3];
  edges[3] = [2,4];
  edges[4] = [1,3,5];
  edges[5] = [4];
  
  edges[6] = [7];
  edges[7] = [6,8];
  edges[8] = [7,9,10];
  edges[9] = [8];
  edges[10] = [8,11];
  edges[11] = [10];
  
  edges[12] = [13];
  edges[13] = [12,14,16];
  edges[14] = [13,15];
  edges[15] = [14,16];
  edges[16] = [13,15];
}

function initializeRectangleNodes() {
  var sections = 50;
  for(var i=0; i<sections; i++) {
    var sectionHeight = 0;
    nodes.push(new Node(new p5.Vector(i*((width/2)/sections),(height/2)),new p5.Vector(i*((width/2)/sections),(height/2))));
    nodes.push(new Node(new p5.Vector(i*((width/2)/sections),(height/2)),new p5.Vector(i*((width/2)/sections),sectionHeight)));
    nodes.push(new Node(new p5.Vector((i+1)*((width/2)/sections),(height/2)),new p5.Vector((i+1)*((width/2)/sections),sectionHeight)));
    nodes.push(new Node(new p5.Vector((i+1)*((width/2)/sections),(height/2)),new p5.Vector((i+1)*((width/2)/sections),(height/2))));
    edges[4*i] = [4*i+1];
    edges[4*i+1] = [4*i,4*i+2];
    edges[4*i+2] = [4*i+1,4*i+3];
    edges[4*i+3] = [4*i+2];
  }
}

function initializeRandomNodes() {
  for(var i=0; i<100; i++) {
    nodes.push(new Node(new p5.Vector(Math.random()*(width/2),Math.random()*(height/2)),new p5.Vector(Math.random()*(width/2),Math.random()*(height/2))));
    var tmpEdges = [];
    for(var j=0; j<3; j++) {
      tmpEdges[j] = Math.round(random(0,99));
    }
    edges[i] = tmpEdges;
  }
}

function initializeHelloWorld() {
  var startLocs = [];
  for(var i=0; i<44; i++) {
    startLocs[i] = new p5.Vector(Math.random()*(width/2),Math.random()*(height/2));
  }
  
  var endLocs = [];
  endLocs[0] = new p5.Vector((width/2)*0.02,(height/2)*0.4);
  endLocs[1] = new p5.Vector((width/2)*0.02,(height/2)*0.3);
  endLocs[2] = new p5.Vector((width/2)*0.02,(height/2)*0.2);
  endLocs[3] = new p5.Vector((width/2)*0.18,(height/2)*0.2);
  endLocs[4] = new p5.Vector((width/2)*0.18,(height/2)*0.3);
  endLocs[5] = new p5.Vector((width/2)*0.18,(height/2)*0.4);
  
  endLocs[6] = new p5.Vector((width/2)*0.22,(height/2)*0.4);
  endLocs[7] = new p5.Vector((width/2)*0.22,(height/2)*0.3);
  endLocs[8] = new p5.Vector((width/2)*0.22,(height/2)*0.2);
  endLocs[9] = new p5.Vector((width/2)*0.38,(height/2)*0.2);
  endLocs[10] = new p5.Vector((width/2)*0.34,(height/2)*0.3);
  endLocs[11] = new p5.Vector((width/2)*0.38,(height/2)*0.4);
  
  endLocs[12] = new p5.Vector((width/2)*0.42,(height/2)*0.4);
  endLocs[13] = new p5.Vector((width/2)*0.42,(height/2)*0.2);
  endLocs[14] = new p5.Vector((width/2)*0.58,(height/2)*0.4);
  
  endLocs[15] = new p5.Vector((width/2)*0.62,(height/2)*0.4);
  endLocs[16] = new p5.Vector((width/2)*0.62,(height/2)*0.2);
  endLocs[17] = new p5.Vector((width/2)*0.78,(height/2)*0.4);
  
  endLocs[18] = new p5.Vector((width/2)*0.82,(height/2)*0.4);
  endLocs[19] = new p5.Vector((width/2)*0.82,(height/2)*0.2);
  endLocs[20] = new p5.Vector((width/2)*0.98,(height/2)*0.2);
  endLocs[21] = new p5.Vector((width/2)*0.98,(height/2)*0.4);
  
  /////////
  
  endLocs[22] = new p5.Vector((width/2)*0.02,(height/2)*0.6);
  endLocs[23] = new p5.Vector((width/2)*0.06,(height/2)*0.8);
  endLocs[24] = new p5.Vector((width/2)*0.1,(height/2)*0.7);
  endLocs[25] = new p5.Vector((width/2)*0.14,(height/2)*0.8);
  endLocs[26] = new p5.Vector((width/2)*0.18,(height/2)*0.6);
  
  endLocs[27] = new p5.Vector((width/2)*0.22,(height/2)*0.8);
  endLocs[28] = new p5.Vector((width/2)*0.22,(height/2)*0.6);
  endLocs[29] = new p5.Vector((width/2)*0.38,(height/2)*0.6);
  endLocs[30] = new p5.Vector((width/2)*0.38,(height/2)*0.8);
  
  endLocs[31] = new p5.Vector((width/2)*0.42,(height/2)*0.8);
  endLocs[32] = new p5.Vector((width/2)*0.42,(height/2)*0.7);
  endLocs[33] = new p5.Vector((width/2)*0.42,(height/2)*0.6);
  endLocs[34] = new p5.Vector((width/2)*0.5,(height/2)*0.7);
  endLocs[35] = new p5.Vector((width/2)*0.58,(height/2)*0.6);
  endLocs[36] = new p5.Vector((width/2)*0.58,(height/2)*0.7);
  endLocs[37] = new p5.Vector((width/2)*0.58,(height/2)*0.8);
  
  endLocs[38] = new p5.Vector((width/2)*0.62,(height/2)*0.8);
  endLocs[39] = new p5.Vector((width/2)*0.62,(height/2)*0.6);
  endLocs[40] = new p5.Vector((width/2)*0.78,(height/2)*0.8);
  
  endLocs[41] = new p5.Vector((width/2)*0.82,(height/2)*0.8);
  endLocs[42] = new p5.Vector((width/2)*0.82,(height/2)*0.6);
  endLocs[43] = new p5.Vector((width/2)*0.98,(height/2)*0.7);
  
  for(var j=0; j<startLocs.length; j++) {
    nodes[j] = new Node(startLocs[j],endLocs[j]);
  }
  
  edges[0] = [1];
  edges[1] = [0,2,4];
  edges[2] = [1];
  edges[3] = [4];
  edges[4] = [1,3,5];
  edges[5] = [4];
  
  edges[6] = [7,11];
  edges[7] = [6,8,10];
  edges[8] = [7,9];
  edges[9] = [8];
  edges[10] = [7];
  edges[11] = [6];
  
  edges[12] = [13,14];
  edges[13] = [12];
  edges[14] = [12];
  
  edges[15] = [16,17];
  edges[16] = [15];
  edges[17] = [15];
  
  edges[18] = [19,21];
  edges[19] = [18,20];
  edges[20] = [19,21];
  edges[21] = [18,20];
  
  edges[22] = [23];
  edges[23] = [22,24];
  edges[24] = [23,25];
  edges[25] = [24,26];
  edges[26] = [25];
  
  edges[27] = [28,30];
  edges[28] = [27,29];
  edges[29] = [28,30];
  edges[30] = [27,29];
  
  edges[31] = [32];
  edges[32] = [31,33,34];
  edges[33] = [32,35];
  edges[34] = [32,36,37];
  edges[35] = [33,36];
  edges[36] = [34,35];
  edges[37] = [34];
  
  edges[38] = [39,40];
  edges[39] = [38];
  edges[40] = [38];
  
  edges[41] = [42,43];
  edges[42] = [41,43];
  edges[43] = [41,42];
}
