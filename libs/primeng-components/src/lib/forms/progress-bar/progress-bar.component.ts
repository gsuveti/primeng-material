import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primeng-material-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  progressBarValue1 = 70;
  progressBarValue2 = 35;

  constructor() {}

  ngOnInit() {}
}
