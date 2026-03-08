```typescript
import { GameLoop } from './engine/GameLoop';
import { SceneManager } from './engine/SceneManager';
import { Player } from './game/Player';

const gameLoop = new GameLoop();
const sceneManager = new SceneManager();
const player = new Player();

gameLoop.addUpdateCallback(sceneManager.update);
gameLoop.addRenderCallback(sceneManager.render);

gameLoop.start();
```