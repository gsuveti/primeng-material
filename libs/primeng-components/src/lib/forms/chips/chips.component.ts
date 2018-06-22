import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primeng-material-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
  cities: string[] = ['New York', 'Rome', 'London', 'Istanbul', 'Paris'];

  constructor() {}

  ngOnInit() {}
}
