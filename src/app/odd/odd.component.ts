import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NumberEvent } from '../model/number-event';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input()
  oddNumberEvent: NumberEvent;

  constructor() { }

  ngOnInit(): void {
  }

}
