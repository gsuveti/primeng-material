import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-file-upload-advanced',
  templateUrl: './file-upload-advanced.component.html',
  styleUrls: ['./file-upload-advanced.component.scss']
})
export class FileUploadAdvancedComponent implements OnInit {
  msgs: Message[];

  uploadedFiles: any[] = [];

  constructor() {}

  ngOnInit() {}

  onUpload(event) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
}
