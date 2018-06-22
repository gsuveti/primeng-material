import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import {TabViewModule} from 'primeng/primeng';
import {HttpClientModule} from '@angular/common/http';
import {SourceCodeTabViewComponent} from './source-code-tab-view/source-code-tab-view.component';
import {PrismComponent} from './prism/prism.component';

@NgModule({
  imports: [
    CommonModule,
    TabViewModule,
    HttpClientModule
  ],
  declarations: [SourceCodeTabViewComponent, PrismComponent],
  exports: [SourceCodeTabViewComponent, PrismComponent]
})
export class SourceCodeTabViewModule {
}
