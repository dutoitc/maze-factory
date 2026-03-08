```typescript
import { SceneManager } from './SceneManager';

export class GameLoop {
  private sceneManager: SceneManager;

  constructor(sceneManager: SceneManager) {
    this.sceneManager = sceneManager;
  }

  public start(): void {
    requestAnimationFrame(() => this.update());
  }

  private update(): void {
    this.sceneManager.update();
    requestAnimationFrame(() => this.update());
  }

  public stop(): void {
    cancelAnimationFrame(this.animationFrameId);
  }
}
```