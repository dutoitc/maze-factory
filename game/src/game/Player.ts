import * as THREE from 'three';

export class Player {
  public cube: THREE.Mesh;

  constructor() {
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    this.cube = new THREE.Mesh(geometry, material);
    this.cube.position.set(0, 0, 0);
  }

  public move(x: number, y: number, z: number): void {
    this.cube.position.set(x, y, z);
  }
}