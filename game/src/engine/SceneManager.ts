```typescript
import * as THREE from 'three';

export class SceneManager {
  public scene: THREE.Scene = new THREE.Scene();
  public camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  public renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();

  constructor() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.camera.position.z = 5;
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }
}
```