import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NumberEvent, NumberType } from '../model/number-event';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  private interval: number = 1000; // means 1 second
  private intervalFunc;
  private isPaused: boolean = false;
  private value: number = 0;

  @Output()
  evenNumberEvent: EventEmitter<NumberEvent> = new EventEmitter<NumberEvent>();

  @Output()
  oddNumberEvent: EventEmitter<NumberEvent> = new EventEmitter<NumberEvent>();

  private timeoutFunc;

  constructor() { }

  ngOnInit(): void {
  }

  onStartEmitNumbers(): void {
    this.timeoutFunc = setInterval(() => {
      const newValue = ++this.value;
      const numberType: NumberType = newValue % 2 == 0 ? NumberType.EVEN : NumberType.ODD;
      const numberEvent: NumberEvent = new NumberEvent(newValue, numberType, `${newValue} is ${numberType}`);
      this.emitNumberEvent(numberEvent);
    }, this.interval);
  }

  onStopEmitNumbers(): void {
    if (this.timeoutFunc) {
      clearInterval(this.timeoutFunc);
    }
  }

  private emitNumberEvent(numberEvent: NumberEvent): void {
    if (NumberType.EVEN === numberEvent.type) {
      console.log(`Content: ${numberEvent.content}`);
      this.evenNumberEvent.emit(numberEvent);
    } else if (NumberType.ODD === numberEvent.type) {
      console.log(`Content: ${numberEvent.content}`);
      this.oddNumberEvent.emit(numberEvent);
    } else {
      console.warn('A peculiar number!')
    }
  }

}
