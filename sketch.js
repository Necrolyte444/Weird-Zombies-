var mill=0;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,216230); //an RGB color for the canvas' background
  //circle
  stroke(73,71,83); // an RGB color for the circle's border
  strokeWeight(5);
  fill(142,111,82,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250,30,60,mill); // center of canvas, 20px dia

  fill(133,120,177,mouseX);
  strokeWeight(0);
  //rect(random(width),random(height),100,50);
  strokeWeight(3);
  stroke(241,117,88);
  line(50,150,400,mouseY);
  textSize(75);
  textFont("Pricedown");
  text('Relaxed zombie',10,400);

}

function mousePressed(){
  
  if (mill>=300)
    {
      mill=0;
    }else{

      mill=mill+10;}

}


