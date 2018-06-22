import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primeng-material-basic-schedule',
  templateUrl: './basic-schedule.component.html',
  styleUrls: ['./basic-schedule.component.scss']
})
export class BasicScheduleComponent implements OnInit {
  events: any[];

  header: any;

  constructor() {}

  ngOnInit() {
    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };

    this.events = [
      {
        title: 'All Day Event',
        start: '2017-10-01'
      },
      {
        title: 'Long Event',
        start: '2017-10-07',
        end: '2017-10-10'
      },
      {
        title: 'Repeating Event',
        start: '2017-10-09T16:00:00'
      },
      {
        title: 'Repeating Event',
        start: '2017-10-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2017-10-11',
        end: '2017-10-13'
      }
    ];
  }
}
