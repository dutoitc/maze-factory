```typescript
import * as THREE from 'three';

export class Player {
    public mesh: THREE.Mesh;

    constructor() {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.mesh = new THREE.Mesh(geometry, material);
    }

    public update(delta: number): void {
        const speed = 0.1;
        if (window.event?.key === 'w') {
            this.mesh.position.z -= speed * delta;
        } else if (window.event?.key === 's') {
            this.mesh.position.z += speed * delta;
        } else if (window.event?.key === 'a') {
            this.mesh.position.x -= speed * delta;
        } else if (window.event?.key === 'd') {
            this.mesh.position.x += speed * delta;
        }
    }
}
```