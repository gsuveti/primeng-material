import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primeng-material-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  text1 = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';
  text2;

  constructor() {}

  ngOnInit() {}
}
