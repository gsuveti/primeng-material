import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-file-auto-upload',
  templateUrl: './file-auto-upload.component.html',
  styleUrls: ['./file-auto-upload.component.scss']
})
export class FileAutoUploadComponent implements OnInit {
  msgs: Message[];

  constructor() {}

  ngOnInit() {}

  onUpload(event) {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
}
