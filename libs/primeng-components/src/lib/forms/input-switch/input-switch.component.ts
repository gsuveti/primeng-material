import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primeng-material-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss']
})
export class InputSwitchComponent implements OnInit {
  inputSwitch1: boolean;
  inputSwitch2: boolean;

  constructor() {}

  ngOnInit() {}
}
