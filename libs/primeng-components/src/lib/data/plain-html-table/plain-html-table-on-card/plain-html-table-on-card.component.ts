import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'primeng-material-plain-html-table-on-card',
  templateUrl: './plain-html-table-on-card.component.html',
  styleUrls: ['./plain-html-table-on-card.component.scss']
})
export class PlainHTMLTableOnCardComponent implements OnInit {
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
