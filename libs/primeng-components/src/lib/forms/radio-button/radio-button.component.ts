import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primeng-material-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  value1;
  value2 = 'Option 2';
  value3;

  constructor() {}

  ngOnInit() {}
}
