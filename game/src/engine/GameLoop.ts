import * as THREE from 'three';

export class GameLoop {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private clock: THREE.Clock;

  constructor(scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.clock = new THREE.Clock();
  }

  public start(): void {
    const animate = () => {
      const delta = this.clock.getDelta();
      this.update(delta);
      this.render();
      requestAnimationFrame(animate);
    };

    animate();
  }

  private update(delta: number): void {
    // Update game logic here
  }

  private render(): void {
    this.renderer.render(this.scene, this.camera);
  }
}