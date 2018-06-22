import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primeng-material-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {
  toggle1: Boolean = false;
  toggle2: Boolean;

  constructor() {}

  ngOnInit() {}
}
