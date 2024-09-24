let start = 0;
let velocidad = 0.05;


function setup() {
  createCanvas(800, 400); 
 
  noCursor();
  //se actualiza la pantalla con el cursor izquierdo
  cursor(CROSS);  
  
}

function draw() {
  background(135, 206, 235);  // color de fondo 
  stroke(0);  // color terreno
  fill(34, 139, 34);  // color relleno terreno
  circle(mouseX, mouseY, 10);
  
  beginShape();  
  
  let xoff = start;
  for (let x = 0; x < width; x++) {
    let y = map(noise(xoff), 0, 2, height / 2, height);  
    vertex(x, y);  
    xoff += 0.04;  
  }


 //scrolling effect
  start += 0.05;  
  vertex(width, height);  
  vertex(0, height);  
  endShape(CLOSE);


}
