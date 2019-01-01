import { NgModule } from '@angular/core';

import { DiaryRoutingModule } from './diary-routing.module';
import { DiaryComponent } from './diary.component';

@NgModule({
  declarations: [DiaryComponent],
  imports: [
    DiaryRoutingModule
  ],
  exports: [
    DiaryComponent
  ]
})
export class DiaryModule { }
