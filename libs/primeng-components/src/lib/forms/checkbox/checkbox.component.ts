import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primeng-material-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  selectedCities: string[] = [];

  constructor() {}

  ngOnInit() {}
}
