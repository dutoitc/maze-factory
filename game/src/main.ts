```typescript
// main.ts
import { GameLoop } from './engine/GameLoop';
import { Player } from './game/Player';
import { Controls } from './game/Controls';

const gameLoop = new GameLoop();
const player = new Player();
const controls = new Controls(player);

gameLoop.start();
```