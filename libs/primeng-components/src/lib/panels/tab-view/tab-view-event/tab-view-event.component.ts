import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-tab-view-event',
  templateUrl: './tab-view-event.component.html',
  styleUrls: ['./tab-view-event.component.scss']
})
export class TabViewEventComponent implements OnInit {
  msgs: Message[];

  constructor() {}

  ngOnInit() {}

  onTabChange(event) {
    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'Tab Expanded',
      detail: 'Index: ' + event.index
    });
  }
}
