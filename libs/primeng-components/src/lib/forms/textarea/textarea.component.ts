import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primeng-material-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  textareaDefault: String = 'Add custom text';
  textareaAutoResize: String = 'Add custom text';
  textareaDisabled: String = 'This is a disabled textarea';

  constructor() {}

  ngOnInit() {}
}
