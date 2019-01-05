import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageService } from './image.service';

@NgModule({
  declarations: [GalleryComponent, ImageDetailComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ],
  providers: [ImageService]
})
export class GalleryModule { }
