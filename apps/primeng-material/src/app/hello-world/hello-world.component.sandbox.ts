import { sandboxOf } from 'angular-playground';
import { HelloWorldComponent } from './hello-world.component';

export default sandboxOf(HelloWorldComponent)
  .add('default', {
    template: `<app-hello-world></app-hello-world>`
  });
