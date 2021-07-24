import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NumberEvent, NumberType } from '../model/number-event';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  private static INTERVAL: number = 1000; // means 1 second

  numberEvent: EventEmitter<NumberEvent> = new EventEmitter<NumberEvent>();

  private timeoutFunc;

  constructor() {}

  ngOnInit(): void {
  }

  onStartEmitNumbers(): void {
    let value: number = 0;
    this.timeoutFunc = setInterval(() => {
      const numberEvent: NumberEvent = this.createNumberEvent(++value);
      this.numberEvent.emit(numberEvent);
    }, CockpitComponent.INTERVAL);
  }

  onStopEmitNumbers(): void {
    if(this.timeoutFunc) {
      clearInterval(this.timeoutFunc);
    }
  }

  createNumberEvent(number: number): NumberEvent {
    const numberType: NumberType = number % 2 == 0 ? NumberType.EVEN : NumberType.ODD;
    return new NumberEvent(number, numberType, `${number} is ${numberType}`);
  }

}
