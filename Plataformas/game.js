const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Cargar la imagen del suelo
const groundImage = new Image();
groundImage.src = 'ground.png'; // Asegúrate de que la imagen esté en la misma carpeta o ajusta la ruta

// Configuración básica
const gravity = 0.5;
const playerSpeed = 5;
const jumpPower = -20;

// Estado del jugador
let player = {
  x: 50,
  y: 300,
  width: 20,
  height: 20,
  color: "red",
  dx: 0,
  dy: 0,
  jumping: false
};

// Plataforma
const platforms = [
  { x: 0, y: 380, width: 600, height: 20 },
  { x: 100, y: 300, width: 100, height: 20 },
  { x: 250, y: 250, width: 100, height: 20 },
  { x: 400, y: 200, width: 100, height: 20 },
];

// Teclas de control
const keys = {
  right: false,
  left: false,
  up: false
};

// Función para dibujar el jugador
function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Función para dibujar las plataformas con la imagen de suelo
function drawPlatforms() {
  platforms.forEach(platform => {
    for (let i = 0; i < platform.width; i += 32) {
      ctx.drawImage(groundImage, platform.x + i, platform.y, 64, 32);
    }
  });
}

// Mover al jugador según las teclas presionadas
function updatePlayerPosition() {
  if (keys.right) player.dx = playerSpeed;
  else if (keys.left) player.dx = -playerSpeed;
  else player.dx = 0;

  player.dy += gravity; // Aplicar gravedad
  player.x += player.dx;
  player.y += player.dy;

  // Limitar el jugador al borde de la pantalla
  if (player.x < 0) player.x = 0;
  if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;

  // Colisiones con las plataformas
  platforms.forEach(platform => {
    if (
      player.x < platform.x + platform.width &&
      player.x + player.width > platform.x &&
      player.y + player.height > platform.y &&
      player.y + player.height < platform.y + platform.height &&
      player.dy >= 0
    ) {
      player.y = platform.y - player.height; // Ajustar al borde superior de la plataforma
      player.dy = 0;
      player.jumping = false;
    }
  });

  // Evitar que el jugador caiga fuera de la pantalla
  if (player.y + player.height > canvas.height) {
    player.y = canvas.height - player.height;
    player.dy = 0;
    player.jumping = false;
  }
}

// Manejo de teclas
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") keys.right = true;
  if (e.key === "ArrowLeft") keys.left = true;
  if (e.key === "ArrowUp" && !player.jumping) {
    player.dy = jumpPower;
    player.jumping = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") keys.right = false;
  if (e.key === "ArrowLeft") keys.left = false;
});

// Función principal del juego
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
  drawPlayer();
  drawPlatforms();
  updatePlayerPosition();
  requestAnimationFrame(gameLoop); // Continuar la animación
}

// Iniciar el juego cuando la imagen esté cargada
groundImage.onload = function () {
  gameLoop();
};
