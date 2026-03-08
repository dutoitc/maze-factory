```typescript
import { Player } from '../game/Player';

export class SceneManager {
  private player: Player;

  constructor() {
    this.player = new Player();
  }

  public update(): void {
    this.player.update();
  }
}
```