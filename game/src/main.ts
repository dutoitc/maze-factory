import * as THREE from 'three';
import { Camera } from './engine/Camera';
import { Player } from './game/Player';
import { Controls } from './game/Controls';

const scene = new Scene();
const camera = new Camera();
const player = new Player();
const controls = new Controls(player);

scene.scene.add(player.cube);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const clock = new THREE.Clock();

function animate() {
  const delta = clock.getDelta();
  controls.update(delta);
  renderer.render(scene.scene, camera.camera);
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  camera.resize(window.innerWidth, window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);
});
