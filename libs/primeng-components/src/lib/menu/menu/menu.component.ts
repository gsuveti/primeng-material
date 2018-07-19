import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'primeng-material-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public items: MenuItem[];

  constructor() {}
  ngOnInit() {
    this.items = [{
      label: 'File',
      items: [
        {label: 'New', icon: 'fa fa-fw fa-plus'},
        {label: 'Open', icon: 'fa fa-fw fa-download'}
      ]
    },
      {
        label: 'Edit',
        items: [
          {label: 'Undo', icon: 'fa fa-fw fa-refresh'},
          {label: 'Redo', icon: 'fa fa-fw fa-repeat'}
        ]
      }];
  }
}
