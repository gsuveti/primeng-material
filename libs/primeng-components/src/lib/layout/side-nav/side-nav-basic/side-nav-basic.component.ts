import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'primeng-material-side-nav-basic',
  templateUrl: './side-nav-basic.component.html',
  styleUrls: ['./side-nav-basic.component.scss']
})
export class SideNavBasicComponent implements OnInit {
  public contentText: string;

  public leftMenuOpen: boolean;
  public rightMenuOpen: boolean;

  constructor() {
    this.leftMenuOpen = false;
    this.contentText = faker.lorem.paragraphs(2);
  }

  ngOnInit() {}

  public toggleLeftMenu(): void {
    this.leftMenuOpen = !this.leftMenuOpen;
  }

  public leftMenuClick(event): void {
    event.stopPropagation();
  }

  public closeLeftMenu(): void {
    this.leftMenuOpen = false;
  }

  public toggleRightMenu(): void {
    this.rightMenuOpen = !this.rightMenuOpen;
  }

  public rightMenuClick(event): void {
    event.stopPropagation();
  }

  public closeRightMenu(): void {
    this.rightMenuOpen = false;
  }
}
