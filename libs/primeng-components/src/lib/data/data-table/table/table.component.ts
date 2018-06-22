import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { Message } from 'primeng/primeng';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'primeng-material-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  items: MenuItem[];
  msgs: Message[];
  cars: Car[] = [];
  selectedCar: Car = null;
  selectedCars: Car[] = [];

  displayCarDialog: boolean;

  colors = [];

  constructor() {}

  ngOnInit() {
    this.cars = this.generateCars(100);

    this.items = [
      {
        label: 'View',
        icon: 'fa-search',
        command: event => this.viewCar(this.selectedCar)
      },
      {
        label: 'Delete',
        icon: 'fa-close',
        command: event => this.deleteCar(this.selectedCar)
      }
    ];
  }

  selectCar(car: Car) {
    this.selectedCar = car;
    this.displayCarDialog = true;
  }

  onDialogHide() {
    this.selectedCar = null;
  }

  viewCar(car: Car) {
    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'Car Selected',
      detail: car.vin + ' - ' + car.brand
    });
  }

  deleteCar(car: Car) {
    let index = -1;
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].vin == car.vin) {
        index = i;
        break;
      }
    }
    this.cars.splice(index, 1);

    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'Car Deleted',
      detail: car.vin + ' - ' + car.brand
    });
  }

  private generateCars(lenght) {
    const cars = [];
    for (let i = 0; i < lenght; i++) {
      const car = {
        vin: faker.random.uuid(),
        year: faker.date.past().getFullYear(),
        brand: faker.company.companyName(),
        color: faker.commerce.color(),
        photo: faker.image.transport(100, 100, true)
      };
      if (this.colors.indexOf(car.color) < 0) {
        this.colors.push({
          label: car.color,
          value: car.color
        });
      }
      cars.push(car);
    }
    return cars;
  }
}

interface Car {
  vin: string;
  year: string;
  brand: string;
  color: string;
  photo: string;
}
