import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NxModule} from '@nrwl/nx';
import {PrimengComponentsModule} from '@primeng-material/primeng-components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {PanelMenuModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NxModule.forRoot(),
    PanelMenuModule,
    ButtonModule,
    PrimengComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
