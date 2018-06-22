import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.scss']
})
export class ListboxComponent implements OnInit {
  cities: SelectItem[] = [
    { label: 'New York', value: 'New York' },
    { label: 'Rome', value: 'Rome' },
    { label: 'London', value: 'London' },
    { label: 'Istanbul', value: 'Istanbul' },
    { label: 'Paris', value: 'Paris' }
  ];
  selectedCity: string;
  selectedCities: string[] = [];

  cars: SelectItem[] = [
    { label: 'Audi', value: 'Audi' },
    { label: 'BMW', value: 'BMW' },
    { label: 'Fiat', value: 'Fiat' },
    { label: 'Honda', value: 'Honda' },
    { label: 'Mercedes', value: 'Mercedes' }
  ];
  selectedCar: string;
  selectedCars: string[] = [];

  constructor() {}

  ngOnInit() {}
}
