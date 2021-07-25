import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NumberEvent, NumberType } from '../model/number-event';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  private timeoutFunc;
  private interval: number = 1000; // means 1 second
  private isPaused: boolean = false;
  private value: number = 0;

  @Output()
  evenNumberEvent: EventEmitter<NumberEvent> = new EventEmitter<NumberEvent>();

  @Output()
  oddNumberEvent: EventEmitter<NumberEvent> = new EventEmitter<NumberEvent>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onPlayGame(): void {
    console.log(this.isPaused ? 'The game has been resumed!' : 'The game has been started!');
    this.isPaused = false;
    if (!this.timeoutFunc) {
      this.timeoutFunc = setInterval(() => {
        if (!this.isPaused) {
          const newValue = ++this.value;
          const numberType: NumberType = newValue % 2 == 0 ? NumberType.EVEN : NumberType.ODD;
          const numberEvent: NumberEvent = new NumberEvent(newValue, numberType, `${newValue} is ${numberType}`);
          this.emitNumberEvent(numberEvent);
        }
      }, this.interval);
    }
  }

  onPauseGame(): void {
    if (this.timeoutFunc && !this.isPaused) {
      this.isPaused = true;
      console.log('The game has been temporary interruped!');
    }
  }

  onStopGame(): void {
    if (this.timeoutFunc) {
      clearInterval(this.timeoutFunc);
      this.resetProperties();
      console.log('The game has been stopped!');
    }
  }

  private resetProperties() {
    this.isPaused = false;
    this.timeoutFunc = undefined;
    this.value = 0;
  }

  private emitNumberEvent(numberEvent: NumberEvent): void {
    if (NumberType.EVEN === numberEvent.type) {
      this.evenNumberEvent.emit(numberEvent);
    } else if (NumberType.ODD === numberEvent.type) {
      this.oddNumberEvent.emit(numberEvent);
    } else {
      console.warn('A peculiar number!')
    }
  }
}
