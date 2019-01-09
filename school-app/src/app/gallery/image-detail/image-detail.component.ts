import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  imageId: number;
  images;
  selectedImage;

  constructor(private route: ActivatedRoute, private imageService: ImageService) { }

  ngOnInit() {
    this.imageId = +this.route.snapshot.paramMap.get('id');
    this.imageService.getImages()
        .subscribe(images => {
          this.images = images;
          this.selectedImage = this.images.find(image => this.imageId === image.id);
        });
  }

}
