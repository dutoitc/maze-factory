```typescript
import { SceneManager } from '../engine/SceneManager';
import * as THREE from 'three';

export class Player {
  private sceneManager: SceneManager;
  private playerGeometry: THREE.BoxGeometry;
  private playerMaterial: THREE.MeshBasicMaterial;
  private player: THREE.Mesh;
  private playerPosition: THREE.Vector3;
  private moveSpeed: number = 0.05;

  constructor(sceneManager: SceneManager) {
    this.sceneManager = sceneManager;

    this.playerGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    this.playerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.player = new THREE.Mesh(this.playerGeometry, this.playerMaterial);
    this.playerPosition = new THREE.Vector3(0.5, 0.5, 0);
    this.player.position.copy(this.playerPosition);
    this.sceneManager.scene.add(this.player);

    document.addEventListener('keydown', (event) => this.handleKeyDown(event));
  }

  public update() {
    this.sceneManager.render();
  }

  private handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'w':
        this.movePlayer(new THREE.Vector3(0, 1, 0));
        break;
      case 'a':
        this.movePlayer(new THREE.Vector3(-1, 0, 0));
        break;
      case 's':
        this.movePlayer(new THREE.Vector3(0, -1, 0));
        break;
      case 'd':
        this.movePlayer(new THREE.Vector3(1, 0, 0));
        break;
    }
  }

  private movePlayer(direction: THREE.Vector3) {
    const newPos = this.playerPosition.clone().add(direction.multiplyScalar(this.moveSpeed));
    const cellX = Math.floor(newPos.x);
    const cellY = Math.floor(newPos.y);
    // Assuming maze is stored somewhere and accessible
    // For simplicity, let's assume maze is a global variable
    if (maze[cellY][cellX] === 1) {
      this.playerPosition = newPos;
      this.player.position.copy(this.playerPosition);
    }
  }
}
```