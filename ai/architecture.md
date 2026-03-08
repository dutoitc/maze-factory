### Implementation Plan for Maze Game Prototype

#### Step 1: Setup the Project
1. **Initialize a new TypeScript project**:
   - Install Node.js and npm.
   - Create a new folder for your project.
   - Run `npm init -y` to create a `package.json` file.
   - Install Three.js and TypeScript:
     ```bash
     npm install three
     npm install --save-dev typescript
     ```

2. **Configure TypeScript**:
   - Create a `tsconfig.json` file with the following settings:
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

#### Step 2: Set Up the Three.js Scene
1. **Create the main entry file**:
   - Create a `src/index.ts` file.
   - Set up the basic Three.js scene, camera, and renderer.

2. **Initialize the scene, camera, and renderer**:
   ```typescript
   import * as THREE from 'three';

   const scene = new THREE.Scene();
   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

3. **Set up the camera**:
   ```typescript
   camera.position.z = 5;
   ```

4. **Create a simple maze grid**:
   - Use planes to create the grid. For simplicity, let's assume a 5x5 grid.

5. **Create the player cube**:
   - Use a `BoxGeometry` and `MeshBasicMaterial` for the player cube.

#### Step 3: Implement Player Movement
1. **Handle WASD input**:
   - Listen for keyboard events and update the player cube's position accordingly.

2. **Create a player object**:
   ```typescript
   const playerGeometry = new THREE.BoxGeometry(1, 1, 1);
   const playerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
   const player = new THREE.Mesh(playerGeometry, playerMaterial);
   player.position.set(0, 0.5, 0);
   scene.add(player);
   ```

3. **Update player position based on WASD input**:
   ```typescript
   function updatePlayer(input: string) {
     switch (input) {
       case 'W':
         player.position.z -= 0.1;
         break;
       case 'A':
         player.position.x -= 0.1;
         break;
       case 'S':
         player.position.z += 0.1;
         break;
       case 'D':
         player.position.x += 0.1;
         break;
     }
   }

   document.addEventListener('keydown', (event) => {
     updatePlayer(event.key.toUpperCase());
   });
   ```

#### Step 4: Render Loop
1. **Create a render loop**:
   ```typescript
   function animate() {
     requestAnimationFrame(animate);
     renderer.render(scene, camera);
   }

   animate();
   ```

#### Step 5: Final Touches
1. **Add lighting**:
   - Add a point light to illuminate the scene.

2. **Optimize and package**:
   - Ensure the code is modular and follows best practices.
   - Compile the TypeScript code using `tsc`.
   - Ensure the final bundle size does not exceed 300 lines.

#### Summary
This plan outlines the steps to create a simple maze game prototype using TypeScript and Three.js. The implementation is modular, and the final bundle size should be kept within the specified constraints. The project will include a basic maze grid, a player cube, and WASD movement controls.