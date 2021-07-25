import { Component, Input, OnInit } from '@angular/core';
import { NumberEvent } from '../model/number-event';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input()
  evenNumberEvent: NumberEvent;

  constructor() { }

  ngOnInit(): void {
  }

}
