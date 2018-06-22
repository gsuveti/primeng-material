import {AfterViewInit, Component, ElementRef, Input, Renderer2} from '@angular/core';

declare var Prism: any;

@Component({
  selector: 'primeng-material-prism',
  template: '',
})
export class PrismComponent implements AfterViewInit {
  @Input() code: string;
  @Input() language: string;
  private preNode: Node;
  private codeNode: Node;
  private nativeElement: Node;

  constructor(private _renderer: Renderer2, private _el: ElementRef) {
    this.nativeElement = _el.nativeElement;

  }

  ngAfterViewInit() {
    this.preNode = this._renderer.createElement('pre');
    this.codeNode = this._renderer.createElement('code');
    this._renderer.addClass(this.codeNode, 'language-' + this.language);
    this._renderer.appendChild(this.nativeElement, this.preNode);
    this._renderer.appendChild(this.preNode, this.codeNode);
    this.codeNode.textContent = this.code;
    Prism.highlightElement(this.codeNode);
  }

}
