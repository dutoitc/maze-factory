import * as THREE from 'three';
import { Player } from '../game/Player';

export class Controls {
    private player: Player;

    constructor(player: Player) {
        this.player = player;
        this.setupControls();
    }

    private setupControls() {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'w':
                    this.movePlayerForward();
                    break;
                case 's':
                    this.movePlayerBackward();
                    break;
                case 'a':
                    this.movePlayerLeft();
                    break;
                case 'd':
                    this.movePlayerRight();
                    break;
            }
        });
    }

    private movePlayerForward() {
        this.player.getMesh().position.z -= this.player.speed;
    }

    private movePlayerBackward() {
        this.player.getMesh().position.z += this.player.speed;
    }

    private movePlayerLeft() {
        this.player.getMesh().position.x -= this.player.speed;
    }

    private movePlayerRight() {
        this.player.getMesh().position.x += this.player.speed;
    }
}