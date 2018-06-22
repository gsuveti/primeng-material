import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-file-upload-default',
  templateUrl: './file-upload-default.component.html',
  styleUrls: ['./file-upload-default.component.scss']
})
export class FileUploadDefaultComponent implements OnInit {
  msgs: Message[];

  constructor() {}

  ngOnInit() {}

  onUpload(event) {
    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Basic Mode'
    });
  }
}
