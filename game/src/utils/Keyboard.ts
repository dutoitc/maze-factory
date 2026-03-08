```typescript
export class Keyboard {
  private static pressed: { [key: string]: boolean } = {};

  public static listen(): void {
    window.addEventListener('keydown', (e) => this.pressed[e.key] = true);
    window.addEventListener('keyup', (e) => this.pressed[e.key] = false);
  }

  public static isPressed(key: string): boolean {
    return this.pressed[key] || false;
  }
}
```