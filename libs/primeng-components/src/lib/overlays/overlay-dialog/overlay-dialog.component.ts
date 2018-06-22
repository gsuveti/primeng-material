import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primeng-material-overlay-dialog',
  templateUrl: './overlay-dialog.component.html',
  styleUrls: ['./overlay-dialog.component.scss']
})
export class OverlayDialogComponent implements OnInit {
  display = false;

  constructor() {}

  ngOnInit() {}

  showDialog() {
    this.display = true;
  }
}
