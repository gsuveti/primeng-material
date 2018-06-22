import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/primeng';
import * as faker from 'faker';

@Component({
  selector: 'primeng-material-data-table-custom',
  templateUrl: './data-table-custom.component.html',
  styleUrls: ['./data-table-custom.component.scss']
})
export class DataTableCustomComponent implements OnInit {
  menuItems: MenuItem[];
  people: Person[] = [];
  idFilter: any[];
  selectedPerson: Person = {
    id: null,
    lastName: null,
    firstName: null,
    age: null,
    photo: null
  };

  person: Person;
  displayDialog: boolean;
  columnOptions: SelectItem[];
  cols: any[];
  stacked = false;

  ageFilter: number;

  constructor() {}

  ngOnInit() {
    this.menuItems = [
      {
        label: 'View',
        icon: 'fa-search',
        command: event => console.log('View')
      },
      {
        label: 'Delete',
        icon: 'fa-close',
        command: event => console.log('Delete')
      }
    ];

    this.people = this.generatePeople(10);

    this.idFilter = [];
    this.idFilter.push({ label: 'All', value: null });

    for (let i = 0; i < this.people.length; i++) {
      this.idFilter.push({
        label: this.people[i].id,
        value: this.people[i].id
      });
    }

    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'lastName', header: 'lastName' },
      { field: 'firstName', header: 'firstName' },
      { field: 'age', header: 'age' }
    ];

    this.columnOptions = [];
    for (let i = 0; i < this.cols.length; i++) {
      this.columnOptions.push({
        label: this.cols[i].header,
        value: this.cols[i]
      });
    }
  }

  onRowSelect(event) {
    this.person = {
      id: event.data.id,
      lastName: event.data.lastName,
      firstName: event.data.firstName,
      age: event.data.age,
      photo: event.data.photo
    };
    this.displayDialog = true;
  }

  save() {
    const index = this.people.indexOf(this.selectedPerson);

    const people = [...this.people];

    people[index] = this.person;

    this.people = people;
    this.person = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.people.indexOf(this.selectedPerson);
    this.people = this.people.filter((val, i) => i !== index);
    this.person = null;
    this.displayDialog = false;
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
