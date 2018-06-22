import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];

  constructor() {}

  ngOnInit() {}

  showSuccess() {
    this.messages = [];
    this.messages.push({
      severity: 'success',
      summary: 'Info Message',
      detail: 'PrimeNG rocks'
    });
  }

  showInfo() {
    this.messages = [];
    this.messages.push({
      severity: 'info',
      summary: 'Info Message',
      detail: 'PrimeNG rocks'
    });
  }

  showWarn() {
    this.messages = [];
    this.messages.push({
      severity: 'warn',
      summary: 'Warn Message',
      detail: 'There are unsaved changes'
    });
  }

  showError() {
    this.messages = [];
    this.messages.push({
      severity: 'error',
      summary: 'Error Message',
      detail: 'Validation failed'
    });
  }

  showMultiple() {
    this.messages = [];
    this.messages.push({
      severity: 'info',
      summary: 'Message 1',
      detail: 'PrimeNG rocks'
    });
    this.messages.push({
      severity: 'info',
      summary: 'Message 2',
      detail: 'PrimeUI rocks'
    });
    this.messages.push({
      severity: 'info',
      summary: 'Message 3',
      detail: 'PrimeFaces rocks'
    });
  }

  clearMessages() {
    this.messages = [];
  }
}
