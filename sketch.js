let hawaii_img;
//let dino1_img;
let dino2_img;
let dino3_img;
let dino4_img;
let dino5_img;
//let dino6_img;
//let dino7_img;
let dino8_img;
//let dino9_img;
//let dino10_img;

let dino;
let data;

var on = true;
var off = false;


function preload() {

	dino = loadJSON("dinos.json");

	hawaii_img = loadImage('hawaii.png');
	//dino1_img = loadImage('allosaurus.png');
	dino2_img = loadImage('brontosaurus.png');
	dino3_img = loadImage('diplodocus.png');
	dino4_img = loadImage('plesiosaurus.png');
	dino5_img = loadImage('pterodactyl.png');
	//dino6_img = loadImage('spinosaurus.png');
	//dino7_img = loadImage('stegosaurus.png');
	dino8_img = loadImage('t-rex.png');
	//dino9_img = loadImage('triceratops.png');
	//dino10_img = loadImage('velociraptor.png');
}


function setup() {
	createCanvas(750, 800);

}

function draw() {
	
	if (on)  {
	background(0);
	
	image(hawaii_img, 0, 0, width, height);

	//image(dino1_img, 540, 280, 240, 240);
	image(dino2_img, 280, 280, 360, 360);
	image(dino3_img, 60, 280, 350, 350);
	image(dino4_img, 0, 500, 380, 380);
	image(dino5_img, 40, 0, 370, 370);
	//image(dino6_img, 210, 372, 220, 220);
	//image(dino7_img, 450, 370, 340, 340);
	image(dino8_img, 310, 410, 510, 510);
	//image(dino9_img, 5, 400, 310, 310);
	//image(dino10_img, 120, 400, 170, 170);

  textAlign(CENTER);
  fill(120,60,10); 
  textSize(36); 
  text('LOST WORLD',370,60);
  textStyle(BOLD);
  
  //fill(180,90,20); 
  //textSize(20); 
  //text('Alma Garcia', 310, 85);

  fill(120,60,10);
  textSize(20);
  text("Click for Info", 365, 320);

} else {

	background(0);
	
	image(hawaii_img, 0, 0, width, height);

	//image(dino1_img, 540, 280, 240, 240);
	image(dino2_img, 280, 280, 360, 360);
	image(dino3_img, 60, 280, 350, 350);
	image(dino4_img, 0, 500, 380, 380);
	image(dino5_img, 40, 0, 370, 370);
	//image(dino6_img, 210, 372, 220, 220);
	//image(dino7_img, 450, 370, 340, 340);
	image(dino8_img, 310, 410, 510, 510);
	//image(dino9_img, 5, 400, 310, 310);
	//image(dino10_img, 120, 400, 170, 170);

  textAlign(CENTER);
  fill(120,60,10); 
  textSize(36); 
  text('LOST WORLD',370,60);
  textStyle(BOLD);

}


if (off) {

	//yellow box//
    fill(255, 255, 180);
    rect(mouseX, mouseY, 400, 125);

    //info yellow box
	textStyle();
	textSize(20);
    textAlign(LEFT);
    fill("black");
    
    text("Name:", mouseX+10, mouseY+30);
    text("Weight:", mouseX+10, mouseY+55);
    text("Classification:", mouseX+10, mouseY+80);
    text("Type:", mouseX+10, mouseY+105);

	fill(255,255,255);
  	fill(dino.r, dino.g, dino.b);
  	text(dino.name, 15, 200);
	textSize(15);
    
    fill("red");
    text(this.data_split[0], mouseX+140, mouseY+30);
    text(this.data_split[1], mouseX+235, mouseY+55);
    text(this.data_split[2], mouseX+290, mouseY+80);
    text(this.data_split[3], mouseX+125, mouseY+105);

}

  
  }

  function mousePressed () {
	
	if (mouseX > 10 && mouseX < 580 && mouseY > 60 && mouseY < 660){
		if (on) {
			on = false;
		}	else  {
			off = true;
		}

	}

// 	if (mouseX > 10 && mouseX < 180 && mouseY > 20 && mouseY < 260) {

// 	off = true;
// 	if (off) {
// 	off = true; 
// 	}
//  }

	// if (mouseX > 10 && mouseX < 180 && mouseY > 10 && mouseY < 960) {

	// 	on = true;
	// 	if (on) {
	// 		on = true; 
	// 	}
	// }

	// if (mouseX > 10 && mouseX < 180 && mouseY > 60 && mouseY < 660) {

	// 	on = true;
	// 	if (on) {
	// 		on = true; 
	// 	}
	// }

	// if (mouseX > 50 && mouseX < 580 && mouseY > 10 && mouseY < 960) {

	// 	on = true;
	// 	if (on) {
	// 		on = true; 
	// 	}
	// }

  }