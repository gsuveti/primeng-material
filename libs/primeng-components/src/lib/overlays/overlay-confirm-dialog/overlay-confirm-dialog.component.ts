import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-overlay-confirm-dialog',
  templateUrl: './overlay-confirm-dialog.component.html',
  styleUrls: ['./overlay-confirm-dialog.component.scss']
})
export class OverlayConfirmDialogComponent implements OnInit {
  msgs: Message[] = [];

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit() {}

  confirm1() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'fa fa-question-circle',
      accept: () => {
        this.msgs = [
          {
            severity: 'info',
            summary: 'Confirmed',
            detail: 'You have accepted'
          }
        ];
      },
      reject: () => {
        this.msgs = [
          { severity: 'info', summary: 'Rejected', detail: 'You have rejected' }
        ];
      }
    });
  }

  confirm2() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        this.msgs = [
          { severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }
        ];
      },
      reject: () => {
        this.msgs = [
          { severity: 'info', summary: 'Rejected', detail: 'You have rejected' }
        ];
      }
    });
  }
}
