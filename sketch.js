let width = 600;
let height = 480;
function setup() {
    createCanvas(windowWidth, windowHeight); // w, h
}

function draw() {
    // draw a rectangle to define the area
    stroke(0);
    strokeWeight(1);
    line(0,0,width,0);
    line(0,0,0,height);
    line(width,0,width,height);
    line(0,height,width,height);

    translate(width/2, height/2);
    fill(255);
    // stroke(237, 118, 97);
    stroke(54,94,181);
    fill(237, 118, 97);
    strokeWeight(3);
    quad(0, 10, 90, 0, 88, 80, 3, 80);
    rotate(PI/2);
    // stroke(54,94,181);
    fill(255);
    quad(0, 10, 90, 0, 88, 80, 3, 80);
    rotate(PI/2);
    quad(0, 10, 90, 0, 88, 80, 3, 80);
    rotate(PI/2);
    quad(0, 10, 90, 0, 88, 80, 3, 80);
    rotate(PI/2);
    quad(95,-80,165,-90,165,90,95,100);
    rotate(-PI/48);
    rect(175, -80, 20, 180);
    rotate(PI/48);
    quad(-130,-90,-200,-80,-200,100,-130,90);
    rotate(PI/96);
    rect(-125, -90, 30, 170);
    
}
