let start = 0;  // punto de inicio para el noise

function setup() {
  createCanvas(800, 400);  // tamaño del canvas
  noLoop();  // evitamos el redibujado continuo, solo dibuja una vez
}

function draw() {
  background(135, 206, 235);  // color de fondo (cielo azul claro)
  stroke(0);  // color de línea para el terreno
    fill(34, 139, 34);  // color de relleno para el terreno (verde)

  beginShape();  // comienza a dibujar la línea de terreno
  let xoff = start;
  for (let x = 0; x < width; x++) {
    let y = map(noise(xoff), 0, 1, height / 2, height);  // generar altura basada en Perlin noise
    vertex(x, y);  // crear vértices para el terreno
    xoff += 0.005;  // ajusta la velocidad del desplazamiento del noise
  }
  vertex(width, height);  // cierra la forma en la esquina inferior derecha
  vertex(0, height);  // cierra la forma en la esquina inferior izquierda
  endShape(CLOSE);  // termina de dibujar el terreno
}
