import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent implements OnInit {
  public items: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.items = [
      { label: 'Stats', icon: 'ui-icon-show-chart' },
      { label: 'Calendar', icon: 'ui-icon-perm-contact-calendar' },
      { label: 'Documentation', icon: 'ui-icon-library-books' },
      { label: 'Support', icon: 'ui-icon-help-outline' },
      { label: 'Social', icon: 'ui-icon-face' }
    ];
  }
}
