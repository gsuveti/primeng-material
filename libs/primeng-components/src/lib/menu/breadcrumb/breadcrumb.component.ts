import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbItems: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.breadcrumbItems = [];
    this.breadcrumbItems.push({ label: 'Categories' });
    this.breadcrumbItems.push({ label: 'Sports' });
    this.breadcrumbItems.push({ label: 'Football' });
    this.breadcrumbItems.push({ label: 'Countries' });
    this.breadcrumbItems.push({ label: 'Spain' });
    this.breadcrumbItems.push({ label: 'F.C. Barcelona' });
    this.breadcrumbItems.push({ label: 'Squad' });
    this.breadcrumbItems.push({
      label: 'Lionel Messi',
      url: 'https://en.wikipedia.org/wiki/Lionel_Messi'
    });
  }
}
