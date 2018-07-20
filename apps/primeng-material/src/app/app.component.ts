import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public navigationMenuItems: MenuItem[];
  leftMenuOpen = true;

  constructor() {

    this.navigationMenuItems = [
      {
        label: 'Primeng - examples',
        expanded: true,
        items: [
          {
            label: 'Form',
            routerLink: ['/primeng-material/forms']
          },
          {
            label: 'Menu',
            routerLink: ['/primeng-material/menus']
          },
          {
            label: 'Data',
            icon: 'ui-icon-grid-on',
            items: [
              {
                label: 'Data Table',
                routerLink: ['/primeng-material/data/data-table']
              },
              {
                label: 'Plain HTML Table',
                routerLink: ['/primeng-material/data/plain-html-table']
              },
              {
                label: 'Grid',
                routerLink: ['/primeng-material/data/grids']
              },
              {
                label: 'List',
                routerLink: ['/primeng-material/data/lists']
              },
              {
                label: 'Data Scroller',
                routerLink: ['/primeng-material/data/data-scroller']
              }
            ]
          },
          {
            label: 'Tree',
            routerLink: ['/primeng-material/tree']
          },
          {
            label: 'Schedule',
            routerLink: ['/primeng-material/schedule']
          },
          {
            label: 'Tree table',
            routerLink: ['/primeng-material/tree-table']
          },
          {
            label: 'Panels',
            routerLink: ['/primeng-material/panels'],
            items: [
              {
                label: 'Accordion',
                routerLink: ['/primeng-material/panels/accordion']
              },
              {
                label: 'Fieldset',
                routerLink: ['/primeng-material/panels/fieldset']
              },
              {
                label: 'Panel-Card',
                routerLink: ['/primeng-material/panels/panel-card']
              },
              {
                label: 'Tab View',
                routerLink: ['/primeng-material/panels/tab-view']
              },
              {
                label: 'Toolbar',
                routerLink: ['/primeng-material/panels/toolbar']
              },
            ]
          },
          {
            label: 'Overlays',
            routerLink: ['/primeng-material/overlays']
          },
          {
            label: 'FileUpload',
            routerLink: ['/primeng-material/fileupload']
          }
        ]
      },

      {
        label: 'Sizes',
        routerLink: ['/primeng-material/sizes']
      },
      {
        label: 'Side nav',
        routerLink: ['/primeng-material/sidenav']
      },
      {
        label: 'Gridle - grid system',
        routerLink: ['/primeng-material/gridle']
      },
      {
        label: 'Icons',
        routerLink: ['/primeng-material/icons']
      }
    ];
  }

  toggleLeftMenu(event) {
    this.leftMenuOpen = !this.leftMenuOpen;
  }

}
