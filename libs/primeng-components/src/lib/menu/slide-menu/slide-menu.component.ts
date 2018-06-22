import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss']
})
export class SlideMenuComponent implements OnInit {
  public items: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'ui-icon-insert-drive-file',
        items: [
          {
            label: 'New',
            icon: 'ui-icon-add',
            items: [
              {
                label: 'Project',
                items: [{ label: 'React' }, { label: 'Angular' }]
              },
              { label: 'Other' }
            ]
          },
          { label: 'Open' },
          { label: 'Close Window' },
          { label: 'Close Tab' },
          { label: 'Save Page As...' },
          { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'ui-icon-edit',
        items: [
          { label: 'Undo', icon: 'ui-icon-forward' },
          { label: 'Redo', icon: 'ui-icon-reply' }
        ]
      },
      {
        label: 'Help',
        icon: 'ui-icon-help-outline',
        items: [
          {
            label: 'Contents'
          },
          {
            label: 'Search',
            icon: 'ui-icon-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'File'
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        items: [
          {
            label: 'Edit',
            icon: 'ui-icon-edit',
            items: [
              { label: 'Save', icon: 'ui-icon-save' },
              { label: 'Update', icon: 'ui-icon-update' }
            ]
          },
          {
            label: 'Other',
            icon: 'ui-icon-phone',
            items: [{ label: 'Delete', icon: 'ui-icon-remove' }]
          }
        ]
      }
    ];
  }
}
