import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HpBarComponent } from './hp-bar/hp-bar.component';

@NgModule({
  declarations: [
    HpBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HpBarComponent
  ]
})
export class SharedModule { }
