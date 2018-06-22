import { Component, OnInit } from '@angular/core';
import { MenuItem, Message } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  messages: Message[] = [];
  items: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'fa-refresh',
        command: () => {
          this.update();
        }
      },
      {
        label: 'Delete',
        icon: 'fa-close',
        command: () => {
          this.delete();
        }
      },
      { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
      { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
    ];
  }

  save() {
    this.messages = [];
    this.messages.push({
      severity: 'info',
      summary: 'Success',
      detail: 'Data Saved'
    });
  }

  update() {
    this.messages = [];
    this.messages.push({
      severity: 'info',
      summary: 'Success',
      detail: 'Data Updated'
    });
  }

  delete() {
    this.messages = [];
    this.messages.push({
      severity: 'info',
      summary: 'Success',
      detail: 'Data Deleted'
    });
  }
}
