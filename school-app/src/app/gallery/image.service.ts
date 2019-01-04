import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { GalleryImage } from '../models/galleryImage.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private db: AngularFireDatabase) { }

  getImages(): Observable<GalleryImage[]> {
    return this.db.list('/uploads').valueChanges();
  }
}
