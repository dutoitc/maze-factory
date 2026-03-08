import * as THREE from 'three';
import { Player } from '../game/Player';

export class SceneManager {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private player: Player;
    private playerGeometry: THREE.BoxGeometry;

    constructor(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
        this.scene = scene;
        this.camera = camera;
    }

    public setupMaze() {
        const gridSize = 10;
        const cellSize = 1;

        const geometry = new THREE.BoxGeometry(cellSize, cellSize, cellSize);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const maze = [];

        for (let x = 0; x < gridSize; x++) {
            for (let y = 0; y < gridSize; y++) {
                const cube = new THREE.Mesh(geometry, material);
                cube.position.set(x * cellSize - gridSize / 2, y * cellSize - gridSize / 2, 0);
                maze.push(cube);
                this.scene.add(cube);
            }
        }
    }

    public setupPlayer() {
        this.playerGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const playerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        this.player = new Player(this.scene, playerMaterial, this.playerGeometry);
        this.scene.add(this.player.mesh); // Add player to the scene
    }
}