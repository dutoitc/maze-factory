```typescript
import { Keyboard } from '../utils/Keyboard';

export class Player {
  private position: THREE.Vector3 = new THREE.Vector3(1, 1, 0.5);
  private speed: number = 0.05;

  constructor() {}

  public update(): void {
    if (Keyboard.isPressed('w')) this.position.z += this.speed;
    if (Keyboard.isPressed('s')) this.position.z -= this.speed;
    if (Keyboard.isPressed('a')) this.position.x -= this.speed;
    if (Keyboard.isPressed('d')) this.position.x += this.speed;
  }

  public getPosition(): THREE.Vector3 {
    return this.position;
  }
}
```