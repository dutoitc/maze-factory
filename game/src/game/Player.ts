import * as THREE from 'three';

export class Player {
    private mesh: THREE.Mesh;
    private speed = 0.1;
    private moveLeft = new THREE.Vector3(-1, 0, 0);
    private moveRight = new THREE.Vector3(1, 0, 0);
    private moveUp = new THREE.Vector3(0, -1, 0);
    private moveDown = new THREE.Vector3(0, 1, 0);

    constructor(scene: THREE.Scene, material: THREE.MeshBasicMaterial, geometry?: THREE.BoxGeometry) {
        if (geometry) {
            this.mesh = new THREE.Mesh(geometry, material);
        } else {
            const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
            this.mesh = new THREE.Mesh(geometry, material);
        }
        this.mesh.position.set(-5, -5, 0.25);
        scene.add(this.mesh);
    }

    public getMesh(): THREE.Mesh {
        return this.mesh;
    }

    public update() {
        // Event listeners are added in Controls class
    }
}