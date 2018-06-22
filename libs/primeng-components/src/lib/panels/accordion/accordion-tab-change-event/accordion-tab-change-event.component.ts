import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-accordion-tab-change-event',
  templateUrl: './accordion-tab-change-event.component.html',
  styleUrls: ['./accordion-tab-change-event.component.scss']
})
export class AccordionTabChangeEventComponent implements OnInit {
  msgs: Message[];

  constructor() {}

  ngOnInit() {}

  onTabClose(event) {
    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'Tab Closed',
      detail: 'Index: ' + event.index
    });
  }

  onTabOpen(event) {
    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'Tab Expanded',
      detail: 'Index: ' + event.index
    });
  }
}
