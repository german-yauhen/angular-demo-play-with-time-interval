import { Component } from '@angular/core';
import { NumberEvent } from './model/number-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumberEvents: NumberEvent[] = [];
  evenNumberEvents: NumberEvent[] = [];

  onOddNumberEmmited(oddNumberEvent: NumberEvent): void {
    if (!this.oddNumberEvents) {
      this.oddNumberEvents = [];
    }
    this.oddNumberEvents.push(oddNumberEvent);
  }

  onEvenNumberEmmited(evenNumberEvent: NumberEvent): void {
    if (!this.evenNumberEvents) {
      this.evenNumberEvents = [];
    }
    this.evenNumberEvents.push(evenNumberEvent);
  }
}
