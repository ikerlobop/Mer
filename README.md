# Raycasting Mejorado con Colisiones

Este proyecto implementa un sistema básico de raycasting en 2D con detección de colisiones para simular un entorno tridimensional en un canvas HTML. El jugador puede moverse por el mapa y visualizar la escena con paredes y un minimapa.

![image](https://github.com/user-attachments/assets/88374058-dfb4-4cb2-b042-b55503944955)


## Descripción del Proyecto / Project Description

### Español:
Este proyecto utiliza un método de raycasting para dibujar un entorno tridimensional a partir de un mapa 2D. El jugador puede moverse usando las flechas del teclado, y se renderiza la escena con sombreado dinámico y corrección del efecto de "fish-eye". Además, incluye un minimapa para una vista 2D del entorno.

### English:
This project uses a raycasting method to draw a 3D environment from a 2D map. The player can move using the arrow keys, and the scene is rendered with dynamic shading and fish-eye correction. Additionally, a minimap is included for a 2D view of the environment.

## Instalación / Installation

### Español:
1. Descarga o clona este repositorio.
2. Abre el archivo `index.html` en tu navegador para comenzar.

### English:
1. Download or clone this repository.
2. Open the `index.html` file in your browser to start.

## Uso / Usage

### Español:
- Usa las flechas del teclado para mover al jugador por el mapa.
- El jugador puede moverse hacia adelante, atrás, girar a la izquierda y a la derecha.
- La vista 3D se genera usando raycasting, que detecta colisiones con las paredes.

### English:
- Use the arrow keys to move the player around the map.
- The player can move forward, backward, and rotate left or right.
- The 3D view is generated using raycasting, which detects collisions with walls.

## Código / Code

### Español:
El código principal se divide en varias funciones:

- **hasCollision(x, y):** Comprueba si hay una colisión en la posición especificada.
- **movePlayer(deltaX, deltaY):** Mueve al jugador teniendo en cuenta posibles colisiones.
- **drawMiniMap():** Dibuja un minimapa 2D del entorno, mostrando paredes y la posición del jugador.
- **castRay(angle):** Lanza un rayo desde la posición del jugador en la dirección especificada, detectando colisiones con las paredes y calculando la distancia hasta el impacto.
- **renderScene():** Renderiza la escena 3D usando la información de los rayos, dibujando paredes y el suelo con sombreado.
- **gameLoop():** Bucle principal del juego que se ejecuta continuamente, actualizando la posición del jugador y renderizando la escena.

### English:
The main code is divided into several functions:

- **hasCollision(x, y):** Checks for a collision at the specified position.
- **movePlayer(deltaX, deltaY):** Moves the player while considering possible collisions.
- **drawMiniMap():** Draws a 2D minimap of the environment, showing walls and the player's position.
- **castRay(angle):** Casts a ray from the player’s position in the specified direction, detecting collisions with walls and calculating the distance to the hit.
- **renderScene():** Renders the 3D scene using ray information, drawing walls and the floor with shading.
- **gameLoop():** Main game loop that runs continuously, updating the player’s position and rendering the scene.

## Controles / Controls

- **Flecha Arriba (Arrow Up):** Avanzar
- **Flecha Abajo (Arrow Down):** Retroceder
- **Flecha Izquierda (Arrow Left):** Girar a la izquierda
- **Flecha Derecha (Arrow Right):** Girar a la derecha

## Contribución / Contribution

### Español:
Las contribuciones son bienvenidas. Si encuentras un problema o tienes una mejora, siéntete libre de abrir un issue o hacer un pull request.

### English:
Contributions are welcome. If you find an issue or have an improvement, feel free to open an issue or submit a pull request.

