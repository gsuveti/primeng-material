import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DevPlaygroundComponent} from './dev-playground/dev-playground.component';

const routes: Routes = [{
  path: 'dev',
  component: DevPlaygroundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
