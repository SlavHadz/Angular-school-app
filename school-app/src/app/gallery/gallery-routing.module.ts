import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'gallery', pathMatch: 'full'},
  {path: 'gallery', component: GalleryComponent},
  {path: 'gallery/:id', component: ImageDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
