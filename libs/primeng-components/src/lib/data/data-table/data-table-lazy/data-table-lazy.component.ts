import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/primeng';
import * as faker from 'faker';

@Component({
  selector: 'primeng-material-data-table-lazy',
  templateUrl: './data-table-lazy.component.html',
  styleUrls: ['./data-table-lazy.component.scss']
})
export class DataTableLazyComponent implements OnInit {
  peopleLazy: Person[] = [];
  selectedPeople = [];
  totalRecords = 50;
  cols: any[];
  selectionModeMultiple = false;
  idOptions: any[];
  carBrandSugestions: any[];
  results: any[];

  constructor() {}

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'carBrand', header: 'car' },
      // {field: 'lastName', header: 'lastName'},
      // {field: 'firstName', header: 'firstName'},
      { field: 'age', header: 'age' },
      { field: 'birthday', header: 'birthday' }
    ];
    this.idOptions = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 }
    ];
    this.carBrandSugestions = [
      'Audi',
      'BMW',
      'Fiat',
      'Ford',
      'Honda',
      'Jaguar',
      'Mercedes',
      'Renault',
      'Volvo',
      'VW'
    ];
  }

  loadPeopleLazy(event: LazyLoadEvent) {
    setTimeout(() => {
      this.peopleLazy = this.generatePeople(10);
    }, 250);
  }

  private generatePeople(lenght) {
    const people = [];
    for (let i = 0; i < lenght; i++) {
      const person: Person = {
        id: faker.random.number(5),
        lastName: faker.name.lastName(),
        carBrand: faker.random.arrayElement(this.carBrandSugestions),
        firstName: faker.name.firstName(),
        age: faker.random.number(100),
        birthday: faker.date.past(),
        photo: faker.image.people(100, 100, true)
      };
      people.push(person);
    }
    return people;
  }

  search(event) {
    this.results = [];

    if (event.query) {
      this.results = this.carBrandSugestions.filter(value => {
        return value.toLowerCase().indexOf(event.query.toLowerCase()) !== -1;
      });
    } else {
      this.results = this.carBrandSugestions;
    }
  }
}

interface Person {
  id: string;
  lastName: string;
  firstName: string;
  carBrand: string;
  age: number;
  birthday: number;
  photo: string;
}
