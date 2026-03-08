```typescript
// Controls.ts
import * as THREE from 'three';

export class Controls {
    private player: Player;

    constructor(player: Player) {
        this.player = player;
        this.setupControls();
    }

    private setupControls() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'w') {
                this.movePlayerForward();
            } else if (event.key === 's') {
                this.movePlayerBackward();
            }
        });
    }

    private movePlayerForward() {
        const mesh = this.player.getMesh();
        mesh.position.z -= 0.1;
    }

    private movePlayerBackward() {
        const mesh = this.player.getMesh();
        mesh.position.z += 0.1;
    }
}
```