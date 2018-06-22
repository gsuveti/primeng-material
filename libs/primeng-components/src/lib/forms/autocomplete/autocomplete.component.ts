import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'primeng-material-autocomplete', // tslint:disable-line:component-selector
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  text: any;
  multipleText: any[];
  results: string[];
  multipleResults: string[];
  rawResults: string[] = [];
  users: User[] = [];
  user: User;

  constructor() {
    new Array(5).fill(1).map(a => {
      this.rawResults.push(faker.address.city());
    });
  }

  ngOnInit() {}

  search(event) {
    this.results = [];

    if (event.query) {
      this.results = this.rawResults.filter(value => {
        return value.toLowerCase().indexOf(event.query.toLowerCase()) !== -1;
      });
    } else {
      this.results = this.rawResults;
    }
  }

  handleDropdown(event) {
    this.results = [];

    setTimeout(() => {
      this.search(event);
    }, 100);
  }

  searchMultiple(event) {
    this.multipleResults = [];

    if (event.query) {
      this.multipleResults = this.rawResults.filter(value => {
        return value.toLowerCase().indexOf(event.query.toLowerCase()) !== -1;
      });
    } else {
      this.multipleResults = this.rawResults;
    }
  }

  searchUsers(event) {
    const users = [];
    new Array(4).fill(1).map((value, index) => {
      users.push({
        name: event.query + faker.name.firstName(),
        jobType: faker.name.jobType(),
        uuid: index
      });
    });
    setTimeout(() => {
      this.users = users;
    }, 1000);
  }
}

interface User {
  uuid: string;
  jobType: string;
  name: string;
}
