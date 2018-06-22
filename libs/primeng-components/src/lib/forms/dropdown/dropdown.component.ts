import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  cities: SelectItem[] = [
    { label: 'New York', value: 'New York' },
    { label: 'Rome', value: 'Rome' },
    { label: 'London', value: 'London' },
    { label: 'Istanbul', value: 'Istanbul' },
    { label: 'Paris', value: 'Paris' }
  ];

  selectedCityForDropdown0: string;
  selectedCityForDropdown1: string;
  selectedCityForDropdown2: string;
  selectedCityForDropdown3: string;

  constructor() {}

  ngOnInit() {}
}
