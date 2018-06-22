import {AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'primeng-material-source-code-tab-view',
  templateUrl: './source-code-tab-view.component.html',
  styleUrls: ['./source-code-tab-view.component.css']
})
export class SourceCodeTabViewComponent implements OnInit, AfterViewInit {
  @Input() componentName: string;

  @Input() withHtml: boolean;
  @Input() withTs: boolean;
  @Input() withScss: boolean;

  public code = {};

  constructor(private el: ElementRef, private httpClient: HttpClient) {
    this.withHtml = true;
    this.withTs = true;
    this.withScss = true;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    if (this.withHtml) {
      this.getComponentCode('html');
    }
    if (this.withTs) {
      this.getComponentCode('ts');
    }
    if (this.withScss) {
      this.getComponentCode('scss');
    }
  }

  getComponentCode(suffix) {
    this.httpClient.get(`assets/${this.componentName}.${suffix}`, {responseType: 'text'})
      .subscribe(code => {
        this.code[suffix] = code;
      }, err => {
        console.log(`${this.componentName}.${suffix}` + ' does not exist.');
      });
  }
}
