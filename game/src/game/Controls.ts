import * as THREE from 'three';
import { Player } from "./Player"

export class Controls {
  private player: Player;
  private keys: { [key: string]: boolean } = {};

  constructor(player: Player) {
    this.player = player;
    window.addEventListener('keydown', (event) => this.keys[event.key] = true);
    window.addEventListener('keyup', (event) => this.keys[event.key] = false);
  }

  public update(delta: number): void {
    if (this.keys['w']) {
      this.player.move(0, delta, 0);
    }
    if (this.keys['s']) {
      this.player.move(0, -delta, 0);
    }
    if (this.keys['a']) {
      this.player.move(-delta, 0, 0);
    }
    if (this.keys['d']) {
      this.player.move(delta, 0, 0);
    }
  }
}
