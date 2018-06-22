import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss']
})
export class MegaMenuComponent implements OnInit {
  public megaMenuItems;

  constructor() {}

  ngOnInit() {
    this.megaMenuItems = [
      {
        label: 'TV',
        icon: 'fa-check',
        items: [
          [
            {
              label: 'TV 1',
              items: [{ label: 'TV 1.1' }, { label: 'TV 1.2' }]
            },
            {
              label: 'TV 2',
              items: [{ label: 'TV 2.1' }, { label: 'TV 2.2' }]
            }
          ],
          [
            {
              label: 'TV 3',
              items: [{ label: 'TV 3.1' }, { label: 'TV 3.2' }]
            },
            {
              label: 'TV 4',
              items: [{ label: 'TV 4.1' }, { label: 'TV 4.2' }]
            }
          ]
        ]
      },
      {
        label: 'Sports',
        icon: 'ui-icon-directions-bike',
        items: [
          [
            {
              label: 'Sports 1',
              items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
            },
            {
              label: 'Sports 2',
              items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
            }
          ],
          [
            {
              label: 'Sports 3',
              items: [{ label: 'Sports 3.1' }, { label: 'Sports 3.2' }]
            },
            {
              label: 'Sports 4',
              items: [{ label: 'Sports 4.1' }, { label: 'Sports 4.2' }]
            }
          ],
          [
            {
              label: 'Sports 5',
              items: [{ label: 'Sports 5.1' }, { label: 'Sports 5.2' }]
            },
            {
              label: 'Sports 6',
              items: [{ label: 'Sports 6.1' }, { label: 'Sports 6.2' }]
            }
          ]
        ]
      },
      {
        label: 'Entertainment',
        icon: 'ui-icon-local-bar',
        items: [
          [
            {
              label: 'Entertainment 1',
              items: [
                { label: 'Entertainment 1.1' },
                { label: 'Entertainment 1.2' }
              ]
            },
            {
              label: 'Entertainment 2',
              items: [
                { label: 'Entertainment 2.1' },
                { label: 'Entertainment 2.2' }
              ]
            }
          ],
          [
            {
              label: 'Entertainment 3',
              items: [
                { label: 'Entertainment 3.1' },
                { label: 'Entertainment 3.2' }
              ]
            },
            {
              label: 'Entertainment 4',
              items: [
                { label: 'Entertainment 4.1' },
                { label: 'Entertainment 4.2' }
              ]
            }
          ]
        ]
      },
      {
        label: 'Technology',
        icon: 'ui-icon-smartphone',
        items: [
          [
            {
              label: 'Technology 1',
              items: [{ label: 'Technology 1.1' }, { label: 'Technology 1.2' }]
            },
            {
              label: 'Technology 2',
              items: [{ label: 'Technology 2.1' }, { label: 'Technology 2.2' }]
            },
            {
              label: 'Technology 3',
              items: [{ label: 'Technology 3.1' }, { label: 'Technology 3.2' }]
            }
          ],
          [
            {
              label: 'Technology 4',
              items: [{ label: 'Technology 4.1' }, { label: 'Technology 4.2' }]
            }
          ]
        ]
      }
    ];
  }
}
