import {Component, OnInit} from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'primeng-material-data-scroller',
  templateUrl: './data-scroller.component.html',
  styleUrls: ['./data-scroller.component.scss']
})
export class DataScrollerComponent implements OnInit {
  scrollListOfCars: Car[] = [];

  selectedCar: Car = null;

  displayCarDialog: boolean;

  constructor() {
  }

  ngOnInit() {
    this.scrollListOfCars = this.generateCars(100);
  }

  selectCar(car: Car) {
    this.selectedCar = car;
    this.displayCarDialog = true;
  }

  onDialogHide() {
    this.selectedCar = null;
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
}

interface Car {
  vin: string;
  year: string;
  brand: string;
  color: string;
  photo: string;
}
