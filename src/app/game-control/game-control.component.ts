import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  private intervalFunc;
  private isPaused: boolean = false;
  private value: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onPlayGame(): void {
    console.log(this.isPaused ? 'The game has been resumed!' : 'The game has been started!');
    this.isPaused = false;
    if (!this.intervalFunc) {
      this.intervalFunc = setInterval(() => {
        if (!this.isPaused) {
          console.log(`Number is: ${++this.value}`);
        }
      }, 1000);
    }
  }

  onPauseGame(): void {
    if (this.intervalFunc && !this.isPaused) {
      this.isPaused = true;
      console.log('The game has been temporary interruped!');
    }
  }

  onStopGame(): void {
    if (this.intervalFunc) {
      clearInterval(this.intervalFunc);
      this.resetProperties();
      console.log('The game has been stopped!');
    }
  }

  private resetProperties() {
    this.isPaused = false;
    this.intervalFunc = undefined;
    this.value = 0;
  }
}
