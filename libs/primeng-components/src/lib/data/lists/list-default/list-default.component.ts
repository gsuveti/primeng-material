import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'primeng-material-list-default',
  templateUrl: './list-default.component.html',
  styleUrls: ['./list-default.component.scss']
})
export class ListDefaultComponent implements OnInit {
  cars: Car[] = [];
  selectedCar: Car = null;
  displayCarDialog: boolean;

  constructor() {}

  ngOnInit() {
    this.cars = this.generateCars(10);
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
      cars.push(car);
    }
    return cars;
  }

  selectCar(car: Car) {
    this.selectedCar = car;
    this.displayCarDialog = true;
  }

  onDialogHide() {
    this.selectedCar = null;
  }
}

interface Car {
  vin: string;
  year: string;
  brand: string;
  color: string;
  photo: string;
}
