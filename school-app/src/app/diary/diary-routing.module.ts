import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiaryComponent } from './diary.component';

const routes: Routes = [
  {path: '', redirectTo: 'diary', pathMatch: 'full'},
  {path: 'diary', component: DiaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiaryRoutingModule { }
