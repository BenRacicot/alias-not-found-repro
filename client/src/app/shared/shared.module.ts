import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildExampleComponent } from './child-example/child-example.component';

@NgModule({
  declarations: [
    ChildExampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ChildExampleComponent
  ]
})
export class SharedModule { }
