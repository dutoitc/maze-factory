```typescript
export class GameLoop {
    private updateCallbacks: Array<() => void> = [];
    private renderCallbacks: Array<() => void> = [];
    private delta: number = 0;
    private lastTime: number = 0;

    start(): void {
        requestAnimationFrame(this.update.bind(this));
    }

    addUpdateCallback(callback: () => void): void {
        this.updateCallbacks.push(callback);
    }

    addRenderCallback(callback: () => void): void {
        this.renderCallbacks.push(callback);
    }

    private update(currentTime: number): void {
        if (this.lastTime === 0) {
            this.lastTime = currentTime;
        }

        this.delta = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;

        for (const callback of this.updateCallbacks) {
            callback();
        }

        requestAnimationFrame(this.update.bind(this));
    }

    private render(): void {
        for (const callback of this.renderCallbacks) {
            callback();
        }
    }
}
```