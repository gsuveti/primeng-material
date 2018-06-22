import { Component, OnInit } from '@angular/core';
import { MenuItem, Message } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-step-menu',
  templateUrl: './step-menu.component.html',
  styleUrls: ['./step-menu.component.scss']
})
export class StepMenuComponent implements OnInit {
  public steps: MenuItem[];
  public activeIndex = 1;
  public msgs: Message[] = [];

  constructor() {}

  ngOnInit() {
    this.steps = [
      {
        label: 'Personal',
        command: (event: any) => {
          this.activeIndex = 0;
          this.msgs.length = 0;
          this.msgs.push({
            severity: 'info',
            summary: 'First Step',
            detail: event.item.label
          });
        }
      },
      {
        label: 'Seat',
        command: (event: any) => {
          this.activeIndex = 1;
          this.msgs.length = 0;
          this.msgs.push({
            severity: 'info',
            summary: 'Seat Selection',
            detail: event.item.label
          });
        }
      },
      {
        label: 'Payment',
        command: (event: any) => {
          this.activeIndex = 2;
          this.msgs.length = 0;
          this.msgs.push({
            severity: 'info',
            summary: 'Pay with CC',
            detail: event.item.label
          });
        }
      },
      {
        label: 'Confirmation',
        command: (event: any) => {
          this.activeIndex = 3;
          this.msgs.length = 0;
          this.msgs.push({
            severity: 'info',
            summary: 'Last Step',
            detail: event.item.label
          });
        }
      }
    ];
  }
}
