Sure! Let's start by creating the initial code files for the project. We'll focus on setting up the engine bootstrap, game loop, and scene creation.

### Step 1: Project Setup
First, ensure your project is initialized and all necessary dependencies are installed.

```bash
# Initialize a new TypeScript project
npm init -y
npm install three
npm install --save-dev typescript
```

Create a `tsconfig.json` file with the following settings:

```json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Step 2: Create the `src` Directory and Files
Create a `src` directory and add the following files:

- `src/index.ts`
- `src/scene.ts`
- `src/camera.ts`
- `src/player.ts`

### Step 3: Implement the Engine Bootstrap
Open `src/index.ts` and set up the basic Three.js scene, camera, and renderer.

```typescript
// src/index.ts
import * as THREE from 'three';
import { Scene } from './scene';
import { Camera } from './camera';
import { Player } from './player';

const scene = new Scene();
const camera = new Camera();
const player = new Player();

scene.add(camera);
scene.add(player);

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
```

### Step 4: Set Up the Scene
Open `src/scene.ts` and create a class to handle scene creation.

```typescript
// src/scene.ts
import * as THREE from 'three';

export class Scene {
  private scene: THREE.Scene;

  constructor() {
    this.scene = new THREE.Scene();
  }

  add(object: THREE.Object3D): void {
    this.scene.add(object);
  }

  getScene(): THREE.Scene {
    return this.scene;
  }
}
```

### Step 5: Set Up the Camera
Open `src/camera.ts` and create a class to handle camera creation.

```typescript
// src/camera.ts
import * as THREE from 'three';

export class Camera {
  private camera: THREE.PerspectiveCamera;

  constructor() {
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  }

  getCamera(): THREE.PerspectiveCamera {
    return this.camera;
  }
}
```

### Step 6: Create the Player
Open `src/player.ts` and create a class to handle player creation.

```typescript
// src/player.ts
import * as THREE from 'three';

export class Player {
  private player: THREE.Mesh;

  constructor() {
    const playerGeometry = new THREE.BoxGeometry(1, 1, 1);
    const playerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.player = new THREE.Mesh(playerGeometry, playerMaterial);
    this.player.position.set(0, 0.5, 0);
  }

  getPlayer(): THREE.Mesh {
    return this.player;
  }
}
```

### Step 7: Initialize the Renderer
Update `src/index.ts` to initialize the renderer and add lighting.

```typescript
// src/index.ts
import * as THREE from 'three';
import { Scene } from './scene';
import { Camera } from './camera';
import { Player } from './player';

const scene = new Scene().getScene();
const camera = new Camera().getCamera();
const player = new Player().getPlayer();

scene.add(camera);
scene.add(player);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
```

With these files in place, you have a basic setup for a Three.js scene with a player cube. The next step would be to implement the maze grid and player movement controls.