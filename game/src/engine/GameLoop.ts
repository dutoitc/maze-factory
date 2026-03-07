```typescript
export class GameLoop {
  private entities: any[] = [];
  private running: boolean = false;

  public addEntity(entity: any) {
    this.entities.push(entity);
  }

  public start() {
    this.running = true;
    this.animate();
  }

  private animate() {
    if (!this.running) return;

    requestAnimationFrame(() => this.animate());

    this.entities.forEach(entity => entity.update());
  }
}
```