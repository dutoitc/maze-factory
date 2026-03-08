import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';

export class GameLoop {
    private scene: Scene;
    private camera: PerspectiveCamera;
    private renderer: WebGLRenderer;

    constructor(scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
    }

    public start() {
        requestAnimationFrame(this.animate.bind(this));
    }

    private animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
}