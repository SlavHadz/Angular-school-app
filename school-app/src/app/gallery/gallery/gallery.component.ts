import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../image.service';
import { Observable } from 'rxjs';
import { GalleryImage } from 'src/app/models/galleryImage.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {

  images: GalleryImage[];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getImages()
        .subscribe((images) => {
          this.images = images;
        });
  }

  ngOnChanges () {
    this.imageService.getImages()
        .subscribe((images) => {
          this.images = images;
        });
  }

}
