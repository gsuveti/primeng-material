import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'primeng-material-grid-default',
  templateUrl: './grid-default.component.html',
  styleUrls: ['./grid-default.component.scss']
})
export class GridDefaultComponent implements OnInit {
  people: Person[] = [];

  constructor() {}

  ngOnInit() {
    this.people = this.generatePeople(10);
  }

  private generatePeople(lenght) {
    const people = [];
    for (let i = 0; i < lenght; i++) {
      const person: Person = {
        id: faker.random.uuid(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        age: faker.random.number(100),
        photo: faker.image.people(100, 100, true)
      };
      people.push(person);
    }
    return people;
  }
}

interface Person {
  id: string;
  lastName: string;
  firstName: string;
  age: number;
  photo: string;
}
