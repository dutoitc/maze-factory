```typescript
import * as THREE from 'three';
import { GameLoop } from './engine/GameLoop';
import { SceneManager } from './engine/SceneManager';
import { Player } from './game/Player';
import { Keyboard } from './utils/Keyboard';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const mazeLayout = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
];

const mazeGeometry = new THREE.BoxGeometry(1, 1, 0.1);
const mazeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

for (let i = 0; i < mazeLayout.length; i++) {
  for (let j = 0; j < mazeLayout[i].length; j++) {
    if (mazeLayout[i][j] === 1) {
      const mazeWall = new THREE.Mesh(mazeGeometry, mazeMaterial);
      mazeWall.position.set(i, j, 0);
      scene.add(mazeWall);
    }
  }
}

const playerGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const playerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const player = new THREE.Mesh(playerGeometry, playerMaterial);
player.position.set(1, 1, 0.5);
scene.add(player);

Keyboard.listen();

const sceneManager = new SceneManager();
sceneManager.player = player;

const gameLoop = new GameLoop(sceneManager);

function updatePlayer() {
  if (Keyboard.isPressed('w')) player.position.z += player.speed;
  if (Keyboard.isPressed('s')) player.position.z -= player.speed;
  if (Keyboard.isPressed('a')) player.position.x -= player.speed;
  if (Keyboard.isPressed('d')) player.position.x += player.speed;
}

function animate() {
  requestAnimationFrame(animate);
  updatePlayer();
  renderer.render(scene, camera);
}

animate();
```