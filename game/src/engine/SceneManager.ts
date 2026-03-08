```typescript
import * as THREE from 'three';
import { Player } from './game/Player';

export class SceneManager {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private player: Player;

    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.player = new Player();
        this.scene.add(this.player.mesh);

        this.camera.position.z = 5;
    }

    update(): void {
        this.player.update(this.delta);
    }

    render(): void {
        this.renderer.render(this.scene, this.camera);
    }
}
```